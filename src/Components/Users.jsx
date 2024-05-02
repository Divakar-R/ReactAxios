import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("response data", response.data);
      setUsers(response.data);
    });
  }, []);

  const convertInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const handleDelete = (e, id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUsers((prev) => {
          return prev.filter((p) => p.id !== id);
        });
      });
  };
  return (
    <div className="row">
      {users.map((user, i) => {
        return (
          <div className="col-md-4">
            <div className="card shadow  m-2">
              <div className=" row">
                <div className="col-md-4">
                  <div className="p-4">
                    <img
                      className="rounded-circle"
                      src={
                        "https://dummyimage.com/100x100/2aaede/ffffff&text=" +
                        convertInitials(user.name)
                      }
                    />
                  </div>
                </div>
                <div className="col-md-8 p-4 align-item-center">
                  <div className="row">
                    <div className="col-md-9">
                      <strong>{user.name}</strong>
                    </div>
                    <div className="col-md-2">
                      <div class="">
                        <div
                          type="button"
                          class=" dropdown-toggl"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            style={{
                              height: "22px",
                              width: "30px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </div>
                        <ul class="dropdown-menu">
                          <li>
                            <Link to={"/user/edit/" + user.id}>
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a
                              onClick={(e) => handleDelete(e, user.id)}
                              class="dropdown-item"
                              href="#"
                            >
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>{user.email}</div>
                  <div>
                    {"@"}
                    {user.username}
                  </div>
                  <div>Ph: {user.phone}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
