import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", { name, email, password });
      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      alert("Lỗi đăng ký!");
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Đăng ký</button>
      </form>

      {/* Nút Trở về Trang chủ */}
      <Link to="/">
        <button style={{ marginTop: "10px", backgroundColor: "#ccc" }}>⬅️ Trở về Trang chủ</button>
      </Link>
    </div>
  );
};

export default Register;
