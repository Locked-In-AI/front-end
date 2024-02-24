import {Route, Routes} from "react-router-dom";
import CVForm from "../components/CVForm";
import CvListPage from "../pages/CvListPage";


const PageRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<CVForm/>} />
            <Route path="/list" element={<CvListPage/>} />

        </Routes>
    )

}

export default PageRoutes;