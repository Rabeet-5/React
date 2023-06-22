import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../components/Login"
import Register from "../components/Register"
import Home from "../components/Home"
import DashboardLayout from "../AdminScreens/dashboardScreens/DashboardLayout"

const AppRouter = ()=>{

    return<>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login/*" element={<LoginPage />} /> 
        <Route exact path="/register/*" element={<Register />} /> 
        <Route exact path="/dashboard/*" element={<DashboardLayout />} />
    </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;