import CompanyLogo from "./components/CompanyLogo";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import MonitorSection from "./components/MonitorSection";
import Navbar from "./components/Navbar";
import PusposeSection from "./components/PusposeSection";
import ScheduleSection from "./components/ScheduleSection";
import "./index.css";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <PusposeSection/>
        <FeatureSection/>
        <ScheduleSection/>
        <MonitorSection/>
      </div>
    </main>
  );
}

export default App;
