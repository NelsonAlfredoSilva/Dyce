import "./FiltroCategorias.css";
import { useState } from "react";

export const FiltroCategorias = ({ categorias,
    seleccionadas,
    onFiltrar,
    cerrarFiltro,
    mostrar
}) => {
    const [categoriaAbierta, setCategoriaAbierta] = useState(null);

    const toggleSubcategoria = (subcategoria) => {

        let nuevas = [];

        if (seleccionadas.includes(subcategoria)) {

            nuevas = seleccionadas.filter(
                s => s !== subcategoria
            );

        } else {

            nuevas = [...seleccionadas, subcategoria];

        }

        onFiltrar(nuevas);

    }
    return (

        <div className={`dropdownContainer ${mostrar ? "dropdownAbierto" : ""}`}>

            <div className="dropdownHeader">

                <h3 className="tituloFiltros">
                    Categorías
                </h3>

                <ion-icon
                    name="close-outline"
                    className="cerrarFiltros"
                    onClick={cerrarFiltro}
                ></ion-icon>

            </div>

            {
                categorias.map((categoria) => (

                    <div className="categoriaPrincipal" key={categoria.nombre}>

                        <div
                            className="categoriaTitulo"
                            onClick={() =>
                                setCategoriaAbierta(
                                    categoriaAbierta === categoria.nombre
                                        ? null
                                        : categoria.nombre
                                )
                            }
                        >

                            <p>{categoria.nombre}</p>

                            <ion-icon
                                name={
                                    categoriaAbierta === categoria.nombre
                                        ? "chevron-down-outline"
                                        : "chevron-forward-outline"
                                }
                            ></ion-icon>

                        </div>

                        {
                            categoriaAbierta === categoria.nombre && (

                                <div className="subcategorias">

                                    {
                                        categoria.subcategorias.map((sub) => (

                                            <label
                                                key={sub}
                                                className="subcategoriaItem"
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={seleccionadas.includes(sub)}
                                                    onChange={() =>toggleSubcategoria(sub)}
                                                />

                                                {sub}

                                            </label>

                                        ))
                                    }

                                </div>

                            )
                        }

                    </div>

                ))
            }

        </div>

    )

}