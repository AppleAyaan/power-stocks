import Navbar from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToActions";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <MainSection />
              <FeatureSection />
              <Workflow />
              <CallToAction />
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;