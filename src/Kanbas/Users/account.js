import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Account = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    try {
      const fetchedAccount = await client.account();
      setAccount(fetchedAccount);
    } catch (err) {
      navigate("/kanbas/signin");
    }
  };
  try {
    useEffect(() => {
      if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
    }, []);
  } catch (err) {
    navigate("/kanbas/signin");
  }

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const save = async () => {
    await client.updateUser(account);

    // code to display success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  if (!account) {
    navigate("/kanbas/signin");
    return null;
  }
  const signout = async () => {
    await client.signout();

    navigate("/kanbas/signin");
  };

  return (
    <>
      <h1 className="mt-3" style={{ fontWeight: 200, color: "grey" }}>
        {id ? `${account.username}'s Account` : "Account Info"}
      </h1>
      <hr />

      {id ? (
        <div className="row d-flex align-items-center justify-content-center w-100 ">
          <div className="col-md-4 align-items-center mx-5 border rounded py-4 px-4 my-4 shadow">
            {showSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Account Updated Successfully!
              </div>
            )}
            {account && (
              <div className="">
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={account.username}
                      onChange={(e) =>
                        setAccount({ ...account, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                        value={account.password}
                        onChange={(e) =>
                          setAccount({ ...account, password: e.target.value })
                        }
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={account.firstName}
                      onChange={(e) =>
                        setAccount({ ...account, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={account.lastName}
                      onChange={(e) =>
                        setAccount({ ...account, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      value={account.dob}
                      onChange={(e) =>
                        setAccount({ ...account, dob: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={account.role}
                      onChange={(e) =>
                        setAccount({ ...account, role: e.target.value })
                      }
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                      <option value="FACULTY">Faculty</option>
                      <option value="STUDENT">Student</option>
                    </select>
                  </div>
                </form>
                {!id && (
                  <button
                    className="form-control btn btn-primary"
                    onClick={save}
                  >
                    Update Account
                  </button>
                )}

                <Link
                  to="/kanbas/users"
                  className="form-control btn btn-warning mt-2"
                >
                  View All Users
                </Link>
                <button
                  className="form-control btn btn-danger mt-2"
                  onClick={signout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center border p-5 mx-4">
          <h4 className="text-center">Hey! Looks like you're not logged it!</h4>
          <br />
          <div className="w-25">
            <div className="d-flex gap-2 w-100 my-2">
              <Link
                to="/kanbas/signin"
                className="form-control btn btn-primary "
              >
                Sign In
              </Link>

              <Link
                to="/kanbas/signup"
                className="form-control btn btn-success"
              >
                Sign Up
              </Link>
            </div>

            <Link
              to="/kanbas/users"
              className="form-control btn btn-warning p-0"
            >
              <button className="btn btn-warning w-100">View All Users</button>
            </Link>

            <h1 style={{ fontSize: 10, textAlign: "center" }}>
              psst... click this ☝️ & select any user to see magic!
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;