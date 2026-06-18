import { useState, useEffect } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { Filtros } from "../../components/Filtros/Filtros";
import './Catalogo.css';
export const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda , setBusqueda] = useState('');
    const [catFiltrada , setCatFiltrada] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
    fetch('/productos.json')
        .then(res => res.json())
        .then(data => {
            setProductos(data)
            setCategorias([...new Set(data.map(p => p.categoria))])
        })
}, [])

    const productosFiltrados = productos
        .filter(p => catFiltrada.length === 0 || catFiltrada.includes(p.categoria))
        .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))


    return (
        <>
            <section className="catalogoFiltros">
                <Filtros onFiltrar={setCatFiltrada} onBuscar={setBusqueda} categorias={categorias}></Filtros>

            </section>
            <section className="catalogoProd">
                {
                    productosFiltrados.map((producto , index) =>{
                        return(
                            <>
                                <CardProduct key={index} {...producto}></CardProduct>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}