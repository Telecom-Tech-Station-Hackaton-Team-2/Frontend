import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import LogingForm from "./components/LoginForm";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
            <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LogingForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
