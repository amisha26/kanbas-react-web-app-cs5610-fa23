import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsTrash3Fill, BsPencil, BsPlusCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./users.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const createUser = async () => {
    // if no username/password entered, show error message and return
    if (user.username === "" || user.password === "") {
      setErrorMessage("You must input a username and password!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    try {
      // check if username already exists, if so show error message and return
      const existingUser = users.find(
        (existing) => existing.username === user.username,
      );
      if (existingUser) {
        setShowError(true);
        setErrorMessage("Username already exists. Choose a new one.");
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }

      user._id = new Date().getTime();
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      setUser({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "USER",
      });
    } catch (err) {
      console.log("error: " + err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    // if no username/password entered, show error message and return
    if (user.username === "" || user.password === "") {
      setErrorMessage("You must input a username and password!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    try {
      // make sure _id exists in database, if not show error message and return
      const existingUser = users.find((existing) => existing._id === user._id);
      if (!existingUser) {
        setShowError(true);
        setErrorMessage(
          "No user with that ID exists. Click Add New User instead.",
        );
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }

      // now make sure it is not changing username to an existing username that is not itself
      const otherUser = users.find(
        (existing) =>
          existing.username === user.username && existing._id !== user._id,
      );
      if (otherUser) {
        setShowError(true);
        setErrorMessage("Username already exists. Choose a new one.");
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }
      // eslint-disable-next-line
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const fetchedUsers = await client.findAllUsers();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Users</h1>

      {showError && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="table-responsive">
        <table className="table border">
          <thead className="">
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Operations</th>
            </tr>
            <tr>
              <td>
                <input
                  className="form-control"
                  placeholder="Username (Required)"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  placeholder="Password (Required)"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </td>
              <td>
                <select
                  className="form-control form-select"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </td>
              <td>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <FaCheckCircle
                    style={{
                      cursor: "pointer",
                      color: "#4caf50",
                      fontSize: 30,
                    }}
                    onClick={updateUser}
                  />
                  <BsPlusCircleFill
                    style={{
                      cursor: "pointer",
                      color: "#2196f3",
                      fontSize: 30,
                    }}
                    onClick={createUser}
                  />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Kanbas/Account/${user._id}`}
                  >
                    {user.username}
                  </Link>
                </td>
                <td></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role} </td>
                <td className="">
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <BsPencil
                      style={{
                        cursor: "pointer",
                        background: "#ffc008",
                        padding: "5px",
                        fontSize: "30px",
                        borderRadius: "10%",
                      }}
                      onClick={() => selectUser(user)}
                    />

                    <BsTrash3Fill
                      onClick={() => deleteUser(user)}
                      style={{
                        cursor: "pointer",
                        color: "white",
                        background: "#dc3545",
                        padding: "5px",
                        fontSize: "30px",
                        borderRadius: "10%",
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 
      <div className="d-flex flex-column align-items-center gap-2 border rounded py-2 px-5">
        <div>
          Don't have an account?
          <Link className="ms-2" to={`/Kanbas/signup`}>
            Sign Up
          </Link>
        </div>
        <Link className="" to={`/Kanbas/users`}>
          View All Users
        </Link>
      </div> */}
    </div>
  );
};

export default UserTable;