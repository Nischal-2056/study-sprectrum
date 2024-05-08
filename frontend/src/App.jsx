

import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar.jsx'

import Footers from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import IELTS from "./pages/Ielts.jsx";
import Studyusa from './pages/StudyUS.jsx';
import StudyUK from "./pages/StudyUK.jsx";
import Register from "./pages/Register.jsx";
import Testpreparation from "./pages/Testt-Prepration-Form.jsx"
import About from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import StudyAboradForm from "./pages/Study-Aboard-Form.jsx";
import Duolingo from "./pages/Duolingo.jsx";
import Pte from "./pages/Pte.jsx";
import Studycanada from "./pages/Studycanada.jsx";
import Tofel from "./pages/Tofel.jsx"
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}; 
  return (
    <>
      <Router>
        <div style={{ width: "100%", height: "calc(100vh - 67px)" }}>
          <Wrapper>
            <Navbar />
            <div style={{ marginTop: "67px", marginBottom: "30px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/studyUk" element={<StudyUK />} />
                <Route path="/studycanada" element={<Studycanada />} />
                <Route path="/ielts" element={<IELTS />} />
                <Route path="/studyusa" element={<Studyusa />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/testpreparation" element={<Testpreparation />} />
                <Route path="/studyaboardform" element={<StudyAboradForm />} />
                <Route path="/duolingo" element={<Duolingo />} />
                <Route path="/pte" element={<Pte />} />
                <Route path="/tofel" element={<Tofel />} />
              </Routes>
            </div>
            <Footers />
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App
