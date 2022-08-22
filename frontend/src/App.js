// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ConsultationPage from "./pages/ConsultationPage/ConsultationPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NewsletterPage from "./pages/NewsletterPage/NewsletterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TreatmentsPage from "./pages/TreatmentsPage/TreatmentsPage";
import AcupuncturePage from "./pages/TreatmentsPage/AcupuncturePage/AcupuncturePage";
import CuppingPage from "./pages/TreatmentsPage/CuppingPage/CuppingPage";
import GuaShaPage from "./pages/TreatmentsPage/GuaShaPage/GuaShaPage";
import HerbalMedicinePage from "./pages/TreatmentsPage/HerbalMedicinePage/HerbalMedicinePage";
import MassagePage from "./pages/TreatmentsPage/MassagePage/MassagePage";
import MoxibustionPage from "./pages/TreatmentsPage/MoxibustionPage/MoxibustionPage";
import NutritionCounselingPage from "./pages/TreatmentsPage/NutritionCounselingPage/NutritionCounselingPage";
import YogaPage from "./pages/TreatmentsPage/YogaPage/YogaPage";
// import UserPage from "./pages/UserPage/UserPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/treatments/acupuncture" element={<AcupuncturePage />} />
        <Route path="/treatments/cupping" element={<CuppingPage />} />
        <Route path="/treatments/guaSha" element={<GuaShaPage />} />
        <Route
          path="/treatments/herbalMedicine"
          element={<HerbalMedicinePage />}
        />
        <Route path="/treatments/massage" element={<MassagePage />} />
        <Route path="/treatments/moxibustion" element={<MoxibustionPage />} />
        <Route
          path="/treatments/nutritionCounseling"
          element={<NutritionCounselingPage />}
        />
        <Route path="/treatments/yoga" element={<YogaPage />} />
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
