import {Route, Routes} from "react-router-dom";
import CVForm from "../pages/CvForm";
import CVList from "../pages/CvList";
import Login from "../pages/Login";
import AuthGuard from "./AuthGuard";



const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path={"/" } element={<AuthGuard/>}>
                <Route index element={<CVList/>}/>
                <Route path="build" element={<CVForm/>}/>
            </Route>
        </Routes>
    )

}

export default PageRoutes;