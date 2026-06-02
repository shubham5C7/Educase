import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileScreen() {
    const navigate =useNavigate()
    const user = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <>
      <div className="flex flex-col h-full bg-white">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <button
        onClick={()=>navigate(-1)}
        className="text-xl font-bold text-gray-700 hover:text-[#6c2bd9]"
        >
            ←
        </button>
        <h2 className="text-base font-semibold text-[#1a1a1a] px-6 py-5">
          Account Settings
        </h2>

        </div>

        <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-200">
          <div className="relative w-16 h-16">
            <img
             src="https://i.pravatar.cc/80?img=12"
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#6c2bd9] rounded-full border-2 border-white flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2a5 5 0 100 10A5 5 0 0012 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="m-0 text-[15px] font-semibold text-[#1a1a1a]">
             {user.fullName || "Shubham"}
            </p>

            <p className="m-0 text-[13px] text-[#666]">{user.email || "Shubham123@gmail.com"}</p>
          </div>
        </div>

        <div className="h-px bg-gray-200 mx-6"></div>

        <p className="px-6 py-4 text-[13px] text-[#555] leading-[1.6]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </>
  );
}
