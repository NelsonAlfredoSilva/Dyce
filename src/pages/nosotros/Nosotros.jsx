import { WspFloat } from "../../components/WspFloat/WspFloat";
import marcasData from "../../data/marcasData";
import { Marcas } from "../../components/Marcas/Marcas";
import './Nosotros.css';
export const Nosotros = () => {

    return (
        <>
            <WspFloat></WspFloat>
            <section className="nosotros">
                <div className="nosotrosContainerTexto">
                    <div className="-titulo">
                        <h4>Quienes Somos</h4>
                    </div>
                    <div className="-texto">
                        <p>Dyce S.A.  es una compañía creada en el año 2003 </p>
                        <p>Sus socios cuentan con más de 40 años de experiencia en el mercado de componentes electrónicos, brindando soluciones confiables y un servicio de excelencia a empresas, técnicos y profesionales del sector.
                        </p>
                        <p>Somos importadores y distribuidores de las principales marcas del mercado, manteniendo un stock permanente para garantizar disponibilidad y una respuesta ágil a las necesidades de nuestros clientes.</p>

                        <p>Nos destacamos por ofrecer:</p>
                        <ul className="-textUl"> 
                            <li className="-textLi">
                                Atención personalizada y asesoramiento especializado.
                            </li>
                            <li className="-textLi">Entregas a todo el país.</li>
                            <li className="-textLi">Servicio de reparto en Ciudad Autónoma de Buenos Aires (CABA) y Gran Buenos Aires (GBA).</li>
                        </ul>
                    </div>
                </div>
               <div className="nosotrosContainerImg">

               </div>
            </section>
            <h5 className="nosotrosMarcas">Nuestras marcas</h5>
            <Marcas marcas={marcasData}></Marcas>
        </>
    )
}