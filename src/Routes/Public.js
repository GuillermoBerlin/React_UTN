
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
import AuthContext from '../Context/AuthContext';


function Public() {
  return (
      <AuthContext.Consumer>
        {
            context=>
              <Routes>
                <Route path="/" element={<Home/>} />
                {
                  !context.userLogin &&    
                    <>
                    <Route path="/alta" element={<Registro/>} />
                    <Route path="/ingresar" element={<Login/>} />
                    </>
                }
                {
                  context.userLogin &&    
                    <>
                    <Route path="/productos/modificar/:id" element={<ProductosModificar/>} />
                    </>
                }
                <Route path="/productos/alta" element={<ProductosAlta/>} />
                <Route path="/producto/:id" element={<Detalle/>} />
              </Routes>
        }
      </AuthContext.Consumer>  
    
  );
}

export default Public;
 