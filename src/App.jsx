import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/login/Login";
import MealMedia from "./components/pages/mealmedia/MealMedia";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default page is Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard route */}
        <Route
          path="/mealmedia"
          element={
            <ProtectedRoute>
              <MealMedia />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
