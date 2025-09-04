import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from './componentes/layouts/Nav';
import Header from './componentes/layouts/Header';
import Footer from './componentes/layouts/Footer';
import Home from './paginas/Home';
import NuevoReclamo from './paginas/NuevoReclamo';
import Login from './paginas/Login';
import Registro from './paginas/Registro';

function App() { 

  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="nuevo" element={<NuevoReclamo />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
