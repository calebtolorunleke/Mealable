import React from "react";
import { mealsData } from "../../../data/meal";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const RecommendationCard = () => {
  return (
    <section className="flex flex-row gap-5">
      {mealsData.map((meal) => (
        <div className="flex flex-col" key={meal.id}>
          <div className="">
            <img src={meal.imageUrl} alt={meal.title} className="w-25 h-20" />
          </div>

          <div className="">
            <div className="">
              <h3>{meal.category}</h3>
              <AddCircleRoundedIcon className="text-green-900" />
            </div>
            <span></span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecommendationCard;
