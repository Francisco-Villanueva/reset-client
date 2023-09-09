import { useContext, useEffect, useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Galery from "./components/Galeria Fotos/Galery";
import { BarberContext } from "./context/BarberContext";
import useDate from "./hooks/useDate";
import { Routes, Route, Link } from "react-router-dom";
import ListaTurnos from "./components/Lista de turnos/ListaTurnos";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [count, setCount] = useState(0);
  const { currentDay } = useDate();
  const { barberos, getAllBarbers, horarios, getHorarios } =
    useContext(BarberContext);

  useEffect(() => {
    getHorarios(1, currentDay);
    getAllBarbers();
  }, []);

  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Galery />

              <Form barberos={barberos} horarios={horarios} />
              <Link to={`/turnos/${1}`}>
                <button>Turnos Laucha</button>
              </Link>
              <Link to={`/turnos/${2}`}>
                <button>Turnos Nahue</button>
              </Link>
            </>
          }
        />

        <Route
          exact
          path="/turnos/:id"
          element={<ListaTurnos barberos={barberos} />}
        />
      </Routes>
    </div>
  );
}

export default App;
