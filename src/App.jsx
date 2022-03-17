import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LogingForm from "./components/LoginForm";

function App() {
  return (
    <>
      <NavBar />
      <LogingForm />
      <Footer />
    </>
  );
}

export default App;
