import "./Marcas.css";

export const Marcas = ({ marcas }) => {

    return (
        <section className="marcas">

            <div className="marcasContainer">

                {[...marcas, ...marcas].map((marca, index) => (
                    <div className="marca" key={index}>
                        <img
                            src={marca.logo}
                            alt={marca.nombre}
                            className="logosMarcas"
                        />
                    </div>
                ))}

            </div>

        </section>
    );

};