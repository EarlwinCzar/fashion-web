import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router";
import Section1 from "./pages/Section1";
import "./styles/utility.css";
import Herobrands from "./components/Herobrands";
import Section2 from "./pages/Section2";

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Herobrands />
      <Section2 />
    </div>
  );
}

export default App;
