import { useState, useEffect } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { FiltroCategorias } from "../../components/FiltroCategorias/FiltroCategorias";
import { Buscador } from "../../components/Buscador/Buscador";
import { WspFloat } from "../../components/WspFloat/WspFloat";
import './Catalogo.css';
export const Catalogo = ({ productos }) => {
    const [busqueda, setBusqueda] = useState('');
    const [catFiltrada, setCatFiltrada] = useState([]);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const categoria = [...new Set(productos.map(p => p.categoria))]


    const productosFiltrados = productos
        .filter(p => catFiltrada.length === 0 || catFiltrada.includes(p.categoria))
        .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))


    return (
        <>
            <WspFloat></WspFloat>
            <section className="catalogoFiltros">
                <Buscador onBuscar={setBusqueda}></Buscador>
            </section>
            <section className="catalogoProd">
                {
                    mostrarFiltros && (
                        <div
                            className="overlayFiltros"
                            onClick={() => setMostrarFiltros(false)}
                        ></div>
                    )
                }
                <aside className={`catalogoSidebar ${mostrarFiltros ? "sidebarAbierto" : ""}`}>
                    <ion-icon
                        name="options-outline"
                        className="filtroResponsive"
                        onClick={() => setMostrarFiltros(!mostrarFiltros)}
                    ></ion-icon>
                    <FiltroCategorias
                        categorias={categoria}
                        seleccionadas={catFiltrada}
                        onFiltrar={setCatFiltrada}
                        cerrarFiltro={() => setMostrarFiltros(false)}
                        mostrar={mostrarFiltros}
                    />
                </aside>
                <div className="catalogoProductosContainer">
                    <div className="categoriasActivas">

                        {
                            catFiltrada.map(cat => (

                                <div className="categoriaTag" key={cat}>

                                    <span className="categoriaTagTitulo">{cat}</span>

                                    <ion-icon
                                        name="close-outline"
                                        onClick={() =>
                                            setCatFiltrada(
                                                catFiltrada.filter(c => c !== cat)
                                            )
                                        }
                                    ></ion-icon>

                                </div>

                            ))
                        }

                    </div>
                    <div className="categoriasProd">
                        {
                            productosFiltrados.map((producto, index) => {
                                return (
                                    <>
                                        <CardProduct key={index} {...producto}></CardProduct>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}