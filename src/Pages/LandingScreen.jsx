import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between h-full px-6 py-8 box-border bg-white">
      <div className="mt-6">
        <h1 className="text-[40px] font-bold text-[#1a1a1a] mb-3 leading-[1.3]">
          Welcome to PopX
        </h1>

        <p className="text-lg text-[#666] leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel urna at erat feugiat tincidunt. Integer euismod, nunc sit amet facilisis luctus, lorem purus consequat velit.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate("/signup")}
          className="w-full py-[14px] bg-[#6c2bd9] hover:bg-[#5b21b6] text-white border-none rounded-md text-[15px] font-semibold cursor-pointer"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-[14px] bg-[#a898c4] hover:bg-[#b39ddb] text-back border-none rounded-md text-[15px] font-medium cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}