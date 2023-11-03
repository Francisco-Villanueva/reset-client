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
import DeleteTurno from "./components/DeleteTurno";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import useModal from "./hooks/useModal";
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
  const { openModal, isModalOpen, closeModal } = useModal();
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="">
              <Home />
              <AboutUs />
              <Form />
              <Footer />
            </div>
          }
        />

        <Route exact path="/turnos/:id" element={<DeleteTurno />} />
      </Routes>
    </div>
  );
}

export default App;
