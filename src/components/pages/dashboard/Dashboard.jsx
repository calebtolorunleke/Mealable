import React from "react";
import Header from "../../layout/Header";
import RecState from "./RecState";
import RecommendationCard from "./RecommendationCard";

const Dashboard = () => {
  const todaysDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="bg-gray-100 h-[100vh]">
      <Header />
      <section className="py-3 px-6">
        <RecState todaysDate={todaysDate} />
        <RecommendationCard />
      </section>
    </section>
  );
};

export default Dashboard;
