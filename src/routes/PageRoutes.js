import {Route, Routes} from "react-router-dom";
import CVForm from "../components/CVForm";


const PageRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<CVForm/>} />
        </Routes>
    )

}

export default PageRoutes;