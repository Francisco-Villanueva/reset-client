import { useContext, useEffect } from "react";
import "./styles/App.scss";
import { BarberContext } from "./context/BarberContext";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import DeleteTurno from "./components/DeleteTurno";
import Homepage from "./views/Homepage";
function App() {
  const { getAllBarbers } = useContext(BarberContext);

  useEffect(() => {
    getAllBarbers();
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/turnos/:id" element={<DeleteTurno />} />
      </Routes>
    </div>
  );
}

export default App;
