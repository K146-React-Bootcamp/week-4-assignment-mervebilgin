import UserComments from "./components/UserComments/UserComments";
import Howitworks from "./components/Howitworks/Howitworks";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

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
      }}>


      <Navbar/>
      <Intro/>
      <Howitworks/>
      <UserComments/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
