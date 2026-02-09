import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { appInsights } from "./appInsights";

import EmployeeVerify from "./assets/LoginRegistration/EmployeeVerify";
import AddEmployee from "./assets/LoginRegistration/AddEmployee";
import Login from "./assets/LoginRegistration/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./assets/AllDashboards/Dashboard";
import PasswordReset from "./assets/LoginRegistration/PasswordReset";
import ForgotPassword from "./assets/LoginRegistration/ForgotPassword";
import BackButton from "./BackButton";

import "./App.css";

/* ---------------------------
   Route change tracker
---------------------------- */
function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    appInsights.trackPageView({
      name: location.pathname,
      uri: window.location.href,
    });
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    const bc = new BroadcastChannel("auth");

    bc.onmessage = (event) => {
      if (event.data.type === "LOGOUT") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      }
    };

    return () => bc.close();
  }, []);

  return (
    <Router>
      {/* App Insights route tracking */}
      <TrackPageViews />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route
          path="/employee/verify/:id/:token"
          element={<EmployeeVerify />}
        />
        <Route
          path="/forgotpassword/:id/:token"
          element={<ForgotPassword />}
        />
        <Route path="/password-reset" element={<PasswordReset />} />

        {/* Protected Route */}
        <Route
          path="/dashboard/:role/:username/:id/*"
          element={
            <ProtectedRoute
              allowedRoles={[
                "admin",
                "employee",
                "manager",
                "hr",
                "ceo",
              ]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for doesn't exist.</p>
              <a href="/" style={{ color: "#007bff" }}>
                Go to Login
              </a>
              <br />
              <BackButton />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
