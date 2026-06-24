import React from "react";
import { mealsData } from "../../../data/meal";

const SuggestionFood = () => {
  return (
    <section>
      {mealsData.map((meal) => (
        <div className="">
          <img
            src={meal.imageUrl}
            alt={meal.title}
            className="w-[160px] h-[160px]"
          />
        </div>
      ))}
    </section>
  );
};

export default SuggestionFood;
