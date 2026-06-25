import React from "react";
import Header from "../../layout/Header";
import RecState from "./RecState";
import RecommendationCard from "./RecommendationCard";
import WeekDate from "./WeekDate";
import SuggestionFood from "./SuggestionFood";
import SundayPlan from "./SundayPlan";

const Dashboard = () => {
  const todaysDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="bg-gray-100 min-h-[100vh]">
      <Header />
      <section className="py-3 px-6">
        <RecState todaysDate={todaysDate} />
        <RecommendationCard />
        <WeekDate />
        <SuggestionFood />
        <SundayPlan/>
      </section>
    </section>
  );
};

export default Dashboard;
