import { useState } from "react";
import API from "../api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const submit = async () => {
    await API.post("/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="card p-3 mb-3">
      <h5>Register</h5>
      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="btn btn-primary" onClick={submit}>
        Register
      </button>
    </div>
  );
}
