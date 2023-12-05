import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";

const Signup = () => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [users, setUsers] = useState([]);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const fetchUsers = async () => {
    const fetchedUsers = await client.findAllUsers();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const signup = async () => {
    // check if username already exists, if so show error message and return.
    const existingUser = users.find(
      (existing) => existing.username === credentials.username,
    );
    if (existingUser) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }

    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  // eslint-disable-next-line

  const showErrorMessage = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  return (
    <div className="d-flex flex-column gap-5 border rounded shadow-sm align-items-center justify-content-center m-5 p-5">
      <h1>Sign Up</h1>
      {showError && (
        <div className="alert alert-danger mt-3" role="alert">
          "Username already exists. Choose a new one."
        </div>
      )}
      {error && <div>{error}</div>}
      <form className="d-flex flex-column gap-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
            type="text"
            className="form-control"
            id="username"
            placeholder="Set your unique username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
            className="form-control"
            id="password"
            placeholder="Set your password"
          />
        </div>
        <button onClick={signup} type="submit" className="btn btn-success">
          Sign Up
        </button>

        <div className="d-flex flex-column align-items-center gap-2 border rounded py-2 px-4">
          <div>
            Already have an account?
            <Link className="ms-2" to={`/Kanbas/signin`}>
              Sign In Here
            </Link>
          </div>

          <Link className="" to={`/Kanbas/users`}>
            View All Users
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;