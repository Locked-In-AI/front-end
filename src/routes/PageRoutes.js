import {Route, Routes} from "react-router-dom";
import CVForm from "../components/CVForm";
import CvListPage from "../pages/CvListPage";
import Login from "../pages/Login";
import AuthGuard from "../components/AuthGuard";



const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path={"/" } element={<AuthGuard/>}>
                <Route index element={<CvListPage/>}/>
                <Route path="build" element={<CVForm/>}/>
            </Route>
        </Routes>
    )

}

export default PageRoutes;