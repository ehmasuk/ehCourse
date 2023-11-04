import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import CourseInner from "./CourseInner";


function Test() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses/:id" element={<CourseInner />} />
                <Route path="/*" element="404 page not found" />
            </Routes>
        </BrowserRouter>
    );
}

export default Test;
