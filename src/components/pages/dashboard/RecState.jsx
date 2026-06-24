import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import React from "react";

const RecState = ({ todaysDate }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className=" flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-4xl text-green-950">
            Your Weekly Table
          </h1>
          <h3 className="">{todaysDate}</h3>
        </div>

        <div className="">
          <button className="flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors mt-2 shadow-sm">
            <AddCircleRoundedIcon className="w-4 h-4 text-white" />
            <span>Add Meal</span>
          </button>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-green-950 font-bold text-md">
          recommendation
        </h1>
      </div>
    </div>
  );
};

export default RecState;
