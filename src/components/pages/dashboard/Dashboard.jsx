import Header from "../../layout/Header";
import Hero from "../../layout/Hero";
import MealDiscovery from "../../layout/MealDiscovery";


const Dashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <MealDiscovery/>
    </div>
  );
};

export default Dashboard;
