import LoginScreen from "../Firebase/Authentication/Login";
import SignUpScreen from "../Firebase/Authentication/Signup";
import Dashboard from "../allDashboards/InstituteDashboard/Screens/DashboardScreens/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../allDashboards/InstituteDashboard/Screens/Layout/ProtectedRoute";
import RegistrationForm from "../allDashboards/StudentDashboard/RegistrationForms/Registration";


function AllRoutes() {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/login/*" element={<LoginScreen />} />
                <Route path="/signup/*" element={<SignUpScreen />} />
                <Route path="/dashboard/*" element={<ProtectedRoutes Component={Dashboard} />} />
                <Route path='/form' element={<RegistrationForm />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default AllRoutes;

