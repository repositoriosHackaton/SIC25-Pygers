import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FormularioPrincipal from './pages/Formulario';
import PaginaDecisiones from './pages/Opciones'
import Live from './pages/Live'

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaDecisiones/>}></Route>
        <Route path="/Formulario" element={<FormularioPrincipal />} />
        <Route path="/Live" element={<Live />} />
      </Routes>
    </BrowserRouter>
  )
}

