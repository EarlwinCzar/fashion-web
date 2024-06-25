import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router";
import Section1 from "./pages/Section1";
import "./styles/utility.css";
import Herobrands from "./components/Herobrands";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Herobrands />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
