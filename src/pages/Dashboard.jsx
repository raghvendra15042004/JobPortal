import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      {/* navbar for Recruit */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={(e) => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, Freinds</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* left sidebar with options to add job,manage job, view application */}
        <div className="inline-block min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 shadow-md rounded-tr-3xl rounded-br-3xl">
          <ul className="flex flex-col pt-6 text-gray-800 w-56">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-3 w-full hover:bg-blue-50 transition-all duration-200 
                ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500 font-semibold"
                    : ""
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img className="min-w-4 " src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-3 w-full hover:bg-blue-50 transition-all duration-200 
                ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500 font-semibold"
                    : ""
                }`
              }
              to={"/dashboard/manage-jobs"}
            >
              <img className="min-w-4 " src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-3 w-full hover:bg-blue-50 transition-all duration-200 
                ${
                  isActive
                    ? "bg-blue-100 border-r-4 border-blue-500 font-semibold"
                    : ""
                }`
              }
              to={"/dashboard/view-applications"}
            >
              <img className="min-w-4 " src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
