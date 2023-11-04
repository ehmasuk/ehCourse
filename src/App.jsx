import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseInner from "./pages/CourseInner";
import HomePage from "./pages/HomePage";
import Notfound from "./components/Notfound";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course/:courseId" element={<CourseInner />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<Notfound header={true} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
