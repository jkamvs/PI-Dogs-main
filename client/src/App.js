import { Route, Routes } from "react-router-dom";
import './App.css'
//Rutas
import Home from "./page/Home";
import Principal from "./page/Principal";
import Detalle from "./page/Detalle";
import AddRaza from "./page/Crear_Raza";
import Error_404 from "./page/404";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/My_Dogs" element={<Principal />} />
        <Route path="/Description-of-My-dog/:id/:nombre" element={<Detalle />} />
        <Route path="/Add_Dog" element={<AddRaza />} />
        <Route path="*" element={<Error_404/>} />
      </Routes>
    </div>
  );
}

export default App;
