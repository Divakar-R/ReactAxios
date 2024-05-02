import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/CreateUser.jsx";
import Users from "./Components/Users.jsx";
import EditUser from "./Components/EditUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <div className="row">
                <Users />
              </div>
            }
          />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
