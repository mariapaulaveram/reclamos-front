import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from './componentes/layouts/Nav';
import Header from './componentes/layouts/Header';
import Footer from './componentes/layouts/Footer';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import VecinosLogueados from './paginas/VecinosLogueados';
import ReclamosDelVecino from './paginas/ReclamosDelVecino';
import NuevoReclamo from './paginas/NuevoReclamo';
import RecuperarContraseña from './componentes/RecuperarContraseña';
import RestablecerContraseña from './componentes/RestablecerContraseña';

function App() { 

  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="logueados" element={<VecinosLogueados />} />
          <Route path="reclamos" element={<ReclamosDelVecino />} />
          <Route path="nuevo-reclamo" element={<NuevoReclamo />} />
          <Route path='recuperar' element={<RecuperarContraseña/>} />
          <Route path="/restablecer/:token" element={<RestablecerContraseña />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
