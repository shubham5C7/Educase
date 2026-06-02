import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user",JSON.stringify(form))
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 py-8 overflow-y-auto no-scrollbar">
      <h1 className="text-[26px] font-bold text-[#1a1a1a] leading-[1.4] mb-5">
        Create your <span className="text-blue-700">PopX account</span> 
      </h1>
      <div className="flex flex-col gap-4 flex-1">
        {/*fullName */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">
            {" "}
            Full Name *
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
            name="fullName"
            placeholder="Enter Your Name"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>
        {/*phone*/}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">
            Phone Number *
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
            name="phone"
            placeholder="Enter Your Mobil Number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">Email *</label>
          <input
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">Password *</label>
          <input
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
            name="password"
            type="password"
            placeholder="Enter Your password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        {/* Company */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">
            Company name
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#6c2bd9]"
            name="companyName"
            placeholder="Enter Your Company Name"
            value={form.companyName}
            onChange={handleChange}
          />
        </div>
        {/* Agency */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-[#6c2bd9] font-medium">
            Are you an Agency?*
          </label>

          <div className="flex gap-5 mt-1">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange}
                className="accent-[#6c2bd9]"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange}
                className="accent-[#6c2bd9]"
              />
              No
            </label>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full py-[14px] bg-[#6c2bd9] hover:bg-[#5b21b6] text-white rounded-md text-[15px] font-semibold transition-colors duration-300"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
