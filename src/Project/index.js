import Signin from "../users/signin";
import Account from "../users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import UserTable from "../users/table";
import Signup from "../users/signup";
import "./index.css";

function Project() {
    return (
      <div className="row project-container">
        <div className="col-2 nav-column">
          <Nav />
        </div>
        <div className="col-10 content-column">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    );
  }
export default Project;
