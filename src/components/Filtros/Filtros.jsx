import { useState, useEffect } from "react";
import { Botones } from "../Botones/Botones";

export const Filtros = ({ onFiltrar, onBuscar, categorias }) => {
    //estados del dropdown de filtros
    const [abierto, setAbierto] = useState(false);
    const [seleccionado, setSeleccionado] = useState([]);


    const toggleCat = (cat) => {
        let nuevas = [];
        if (seleccionado.includes(cat)) {
            nuevas = seleccionado.filter(c => c !== cat)
        } else {
            nuevas = [...seleccionado, cat];
        }
        setSeleccionado(nuevas);
        onFiltrar(nuevas);
    }


    return (
        <>
            <div className="filtrosContainer">
                <div className="-barra">
                    <input onChange={(e) => onBuscar(e.target.value)} placeholder="Buscar.."></input>
                </div>
                <div className="-filtraje">
                    <Botones texto='Filtrar' icon='options-outline' onClick={() => setAbierto(!abierto)}></Botones>
                    {abierto && (
                        <div className="dropdownContainer">
                            {categorias.map((cat, i) => (
                                < label key={i} >
                                    <input
                                        type="checkbox"
                                        checked={seleccionado.includes(cat)}
                                        onChange={() => toggleCat(cat)}
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    )}

                </div>
            </div >
        </>
    )
}