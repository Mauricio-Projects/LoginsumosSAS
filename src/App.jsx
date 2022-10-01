import {BrowserRouter, Route, Routes} from "react-router-dom";
import './styles/styles.css'

import Admin from './pages/admin/Index'
import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import AuthLayout from './layout/AuthLayout';
import Productos from "./pages/admin/Productos";
import Clientes from "./pages/admin/Clientes";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path='/login' element= { <AuthLayout> < Login/>   </AuthLayout> } />
              <Route path="/registro" element= { <AuthLayout>  < Registro />  </AuthLayout> } />  
              <Route path='/admin/productos' element= { <PrivateLayout> < Productos />   </PrivateLayout> } />
              <Route path='/admin/clientes' element= { <PrivateLayout> < Clientes/>   </PrivateLayout> } />
              <Route path="/admin" element={<PrivateLayout> < Admin /> </PrivateLayout>} />
              <Route path="/" element={<PublicLayout> < Index /> </PublicLayout>} />   
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
