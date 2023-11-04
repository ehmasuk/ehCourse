import Header from "../components/Header";
import Footer from "./Footer";

function Base({ children, carItems, setCartItems }) {
    return (
        <>
            <Header carItems={carItems} setCartItems={setCartItems} />
            {children}
            <Footer />
        </>
    );
}

export default Base;
