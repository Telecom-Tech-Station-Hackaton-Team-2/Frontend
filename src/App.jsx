import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import LogingForm from "./components/loginForm/LoginForm";
import ItemsListContainer from "./components/productList/ItemsListContainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LogingForm />} />
                    <Route
                        path="/capacitaciones"
                        element={<ItemsListContainer />}
                    />
                    <Route
                        path="/welcomeUser"
                        element={<Welcome />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
