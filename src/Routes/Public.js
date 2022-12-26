
import Home  from '../Pages/Home';
import {
  Routes,
  Route
} from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Detalle from '../Pages/Detalle';
import ProductosAlta from '../Pages/ProductosAlta';
import ProductosModificar from '../Pages/ProductosModificar';


function Public() {
  return (
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/alta" element={<Registro/>} />
          <Route path="/ingresar" element={<Login/>} />
          <Route path="/productos/alta" element={<ProductosAlta/>} />
          <Route path="/productos/modificar/:id" element={<ProductosModificar/>} />
          <Route path="/producto/:id" element={<Detalle/>} />
        </Routes>
    
  );
}

export default Public;
 