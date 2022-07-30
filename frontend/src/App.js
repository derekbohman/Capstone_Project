// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import NewsletterPage from "./pages/NewsletterPage/NewsletterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TreatmentsPage from "./pages/TreatmentsPage/TreatmentsPage";
// import UserPage from "./pages/UserPage/UserPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        {/* <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
