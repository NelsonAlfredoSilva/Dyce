import { WspFloat } from "../../components/WspFloat/WspFloat";
import corpo from "../../assets/nosotrosImg.jpg"
import './Nosotros.css';
import { Cards } from "../../components/Cards/Cards";

export const Nosotros = () => {

    return (
        <>
            <WspFloat></WspFloat>
            <section className="nosotros">
                <div className="nosotrosContainerImg">
                    <img src={corpo} />
                </div>
                <div className="separador">
                    <span>o</span>
                </div>
                <div className="nosotrosContainerTexto">
                    <div className="-titulo">
                        <h4>Quienes Somos</h4>
                    </div>
                    <div className="-texto">
                        <p>Dyce S.A.  es una compañía creada en el año 2003 </p>
                        <p>Sus socios cuentan con más de 40 años de experiencia en el mercado de componentes electrónicos, brindando soluciones confiables y un servicio de excelencia a empresas, técnicos y profesionales del sector.
                        </p>
                        <p>Somos importadores y distribuidores de las principales marcas del mercado, manteniendo un stock permanente para garantizar disponibilidad y una respuesta ágil a las necesidades de nuestros clientes.</p>
                    </div>
                </div>
                <div className="nosotrosContainerDestacados">
                    <h5>Servicios Exclusivos </h5>
                    <div className="destacadosCardsContainer">
                        <Cards titulo="Seguimiento Continuo" texto="Atención personalizada y asesoramiento especializado." icon=""></Cards>
                        <Cards titulo="Cobertura Nacional" texto="Despachos en toda Argentina." icon=""></Cards>
                        <Cards titulo="Cobertura Local" texto="Cobertura especial en CABA y Gran Buenos Aires." icon=""></Cards>
                    </div>
                </div>
            </section>
        </>
    )
}