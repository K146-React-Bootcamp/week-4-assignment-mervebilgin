import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Howitworks from "./components/Howitworks/Howitworks";
import UserComments from "./components/UserComments/UserComments";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="*" element={<UserComments />} />
          <Route path="" element={<Intro />} />
          <Route path="howitworks" element={<Howitworks />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
