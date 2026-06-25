import { useState, useEffect } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { Filtros } from "../../components/Filtros/Filtros";
import './Catalogo.css';
export const Catalogo = ({productos}) => {
    const [busqueda , setBusqueda] = useState('');
    const [catFiltrada , setCatFiltrada] = useState([]);
    const categoria = [...new Set(productos.map(p=>p.categoria))]


    const productosFiltrados = productos
        .filter(p => catFiltrada.length === 0 || catFiltrada.includes(p.categoria))
        .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))


    return (
        <>
            <section className="catalogoFiltros">
                <Filtros onFiltrar={setCatFiltrada} onBuscar={setBusqueda} categorias={categoria}></Filtros>
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