
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Inicio } from './pages/inicio/Inicio';
import { Catalogo } from './pages/catalogo/Catalogo';
import { Contacto } from './pages/contacto/Contacto';
import { Nosotros } from './pages/nosotros/Nosotros';
import { LayoutPublic } from './layouts/LayoutPublic';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/productos.json')
        .then(res => res.json())
        .then(data => {
            setProductos(data)
        })
}, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPublic></LayoutPublic>}>
            <Route path='/' element={<Inicio productos={productos}></Inicio>}></Route>
            <Route path='/Catalogo' element={<Catalogo productos = {productos}></Catalogo>}></Route>
            <Route path='/Nosotros' element={<Nosotros></Nosotros>}></Route>
            <Route path='/Contacto' element={<Nosotros></Nosotros>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
