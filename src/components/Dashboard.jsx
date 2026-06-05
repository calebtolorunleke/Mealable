import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import SearchIcon from "@mui/icons-material/Search";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
     <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-8 my-14">
  
  {/* Search Bar Wrapper */}
  <div className="relative w-full max-w-sm">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <SearchIcon className="w-5 h-5 text-green-700" /> {/* Softened green slightly for better clarity */}
    </div>
    <input
      type="search"
      placeholder="Search meals or ingredients..."
      className="w-full bg-green-50 text-slate-900 placeholder-slate-400 text-sm rounded-xl border border-green-100 py-2.5 pl-10 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all shadow-sm"
    />
  </div>

  {/* Category Filter Pills */}
  <ul className="flex flex-row gap-2 text-sm font-semibold text-slate-600">
    {/* Active Pill */}
    <li className="px-4 py-2 bg-green-100 text-green-800 rounded-xl cursor-pointer transition-colors">
      All
    </li>
    
    {/* Inactive Pills - Given identical padding so the layout rows align perfectly */}
    <li className="px-4 py-2 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors">
      Breakfast
    </li>
    <li className="px-4 py-2 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors">
      Lunch
    </li>
    <li className="px-4 py-2 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors">
      Dinner
    </li>
  </ul>

</div>
    </div>
  );
};

export default Dashboard;
