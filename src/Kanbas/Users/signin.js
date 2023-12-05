import * as client from "./client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const data = await client.signin(credentials);
      navigate(`/kanbas/Account/${data._id}`);
    } catch (err) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signin();
  };

  return (
    <div className="d-flex flex-column gap-5 border rounded shadow-sm align-items-center justify-content-center m-5 p-5">
      <h1>Sign In</h1>
      {showError && (
        <div className="alert alert-danger mt-3" role="alert">
          "Login unsuccessful. Please try again."
        </div>
      )}
      <form className="d-flex flex-column gap-4" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:{" "}
          </label>
          <input
            id="username"
            className="form-control"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:{" "}
          </label>
          <input
            id="password"
            type="password"
            className="form-control md-6"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>

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
        </div>
      </form>
    </div>
  );
};

export default Signin;