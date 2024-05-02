import React from "react";
import Users from "./Users";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>User Management</h2>
        </div>
        <div className="col-md-4">
          <Link to="/user/create">
            {" "}
            <button className="btn btn-primary"> Add User</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
