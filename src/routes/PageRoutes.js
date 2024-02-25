import {Route, Routes} from "react-router-dom";
import CVForm from "../components/CVForm";
import CvListPage from "../pages/CvListPage";


const PageRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<CvListPage/>} />
            <Route path="/build" element={<CVForm/>} />
        </Routes>
    )

}

export default PageRoutes;