import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import LogingForm from "./components/loginForm/LoginForm";
import ItemsListContainer from "./components/itemsList/ItemsListContainer";
import Profile from "./components/profile/Profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LogingForm />} />
          <Route path="/capacitaciones" element={<ItemsListContainer itemType={"training"} />} />
          <Route path="/accesos" element={<ItemsListContainer itemType={"access"}/>} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/inicio" element={<Welcome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
