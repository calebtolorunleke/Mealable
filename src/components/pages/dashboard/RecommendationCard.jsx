import React from "react";
import { mealsData } from "../../../data/meal";

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
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecommendationCard;
