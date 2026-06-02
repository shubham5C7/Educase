import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storeUser = JSON.parse(localStorage.getItem("user"));

    if (!storeUser) {
      setError("No account found. Please create an account first.");
      navigate("/signup");
      return;
    }
    if (
      storeUser.email === form.email &&
      storeUser.password === form.password
    ) {
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-[26px] font-bold text-[#1a1a1a] leading-[1.4]">
          {" "}
          SignIn to your <br />
          <span className="text-[#6c2bd9]">PopX account</span>
        </h1>
        <p className="text-[13px] text-gray-500 leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          urna at erat feugiat tincidunt.
        </p>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="mt-2 w-full py-[14px] bg-gray-400 hover:bg-[#6c2bd9] text-white rounded-md text-[15px] font-semibold transition-colors duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}
