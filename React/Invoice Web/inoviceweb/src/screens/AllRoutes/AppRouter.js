import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"

const AppRouter = ()=>{

    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/login/*" element={<Login />} /> 
        <Route path="/register/*" element={<Register />} /> 
    </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;