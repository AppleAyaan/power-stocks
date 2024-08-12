import Navbar from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToActions";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <MainSection />
        <FeatureSection />
        <Workflow />
        <CallToAction />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
