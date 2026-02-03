import { useState } from "react";
import API from "../api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async () => {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    alert("Login successful");
  };

  return (
    <div className="card p-3 mb-3">
      <h5>Login</h5>
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
      <button className="btn btn-success" onClick={submit}>
        Login
      </button>
    </div>
  );
}
