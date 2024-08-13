import Navbar from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToActions";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

{/*pages routes */}
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import CreateAccount from './pages/CreateAccount'

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;