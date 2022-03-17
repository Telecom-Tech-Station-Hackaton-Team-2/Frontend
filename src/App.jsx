import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import LogingForm from "./components/loginForm/LoginForm";
import ItemsListContainer from "./components/productList/ItemsListContainer";

function App() {
  return (
    <>
            <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LogingForm />} />
            <Route path="/capacitaciones" element={<ItemsListContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
