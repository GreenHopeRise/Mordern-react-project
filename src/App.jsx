import CompanyLogo from "./components/CompanyLogo";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MonitorSection from "./components/MonitorSection";
import Navbar from "./components/Navbar";
import NewsletterSec from "./components/NewsletterSec";
import PricingSection from "./components/PricingSection";
import PusposeSection from "./components/PusposeSection";
import ScheduleSection from "./components/ScheduleSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
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
        <PricingSection/>
        <ServicesSection/>
        {/* <TestimonialSection/> */}
        <NewsletterSec/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
