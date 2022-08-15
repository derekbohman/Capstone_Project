import "./AppointmentsPage.css";
import React, { useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";

const AppointmentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="appointmentsContainer">
      <h1>Appointments</h1>
      <Calendar />
    </div>
  );
};

export default AppointmentsPage;
