import React from "react";
import { mealsData } from "../../../data/meal";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const RecommendationCard = () => {
  const recommendedMeals = mealsData.slice(0, 6);
  return (
    <section>
      <div className="flex flex-row flex-wrap gap-4">
        {recommendedMeals.map((meal) => (
          <div
            className="flex flex-col gap-4 flex-wrap min-w-[160px] bg-white p-3 shadow-sm hover:shadow-md rounded-lg transition-all"
            key={meal.id}
          >
            <div className="">
              <img
                src={meal.imageUrl}
                alt={meal.title}
                className="w-full object-cover h-20 rounded-md"
              />
            </div>

            <div className="mt-1">
              <div className="flex flex-row justify-between items-center ">
                <span className={`px-3 py-1 rounded-full text-xs font-md ${meal.category==="Lunch" || meal.category ==="Dinner" ? "bg-green-100" : "bg-orange-100 text-orange-800"}`}>{meal.category}</span>

                <button className="text-green-900 hover:scale-110 transition">
                  <AddCircleRoundedIcon className="" />
                </button>
              </div>

              <h3 className="font-semibold text-gray-900 mt-3">{meal.title.slice(0,6)}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationCard;
