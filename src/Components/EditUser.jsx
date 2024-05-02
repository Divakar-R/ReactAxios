import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setForm(response.data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + id, form)
      .then((response) => {
        console.log("response data", response.data);
        navigate("/");
        return;
      });
  };
  return (
    <div>
      <div className="text-center">
        <h2>Create User</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={form?.name || ""}
              type="text"
              className="form-control"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={form?.email || ""}
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="username"
              value={form?.username || ""}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="phone"
              value={form?.phone || ""}
              className="form-control"
              id="phoneNumber"
            />
          </div>
          <div className="d-flex gap-3">
            <button type={"submit"} className="btn btn-primary">
              Save
            </button>
            <button className="btn btn-info">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}
