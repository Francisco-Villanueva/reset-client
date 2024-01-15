import { useContext, useEffect } from "react";
import "./styles/App.scss";
import { useStore } from "./context/BarberContext";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { Homepage } from "./views";

function App() {
  const { getAllBarbers } = useStore();
  useEffect(() => {
    getAllBarbers();
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Homepage />
    </div>
  );
}

export default App;
