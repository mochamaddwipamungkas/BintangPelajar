import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="form">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
