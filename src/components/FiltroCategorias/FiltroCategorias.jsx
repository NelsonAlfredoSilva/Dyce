import "./FiltroCategorias.css";

export const FiltroCategorias = ({
    categorias,
    seleccionadas,
    onFiltrar, cerrarFiltro , mostrar
}) => {

    const toggleCat = (cat) => {

        let nuevas = [];

        if (seleccionadas.includes(cat)) {

            nuevas = seleccionadas.filter(c => c !== cat);

        } else {

            nuevas = [...seleccionadas, cat];

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
                categorias.map((cat, i) => (

                    <div className="dropdowContainerCat" key={i}>

                        <label>

                            <input
                                type="checkbox"
                                checked={seleccionadas.includes(cat)}
                                onChange={() => toggleCat(cat)}
                            />

                            {cat}

                        </label>

                    </div>

                ))
            }

        </div>

    )

}