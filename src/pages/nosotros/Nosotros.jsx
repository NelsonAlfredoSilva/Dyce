import { WspFloat } from "../../components/WspFloat/WspFloat";
import './Nosotros.css';
export const Nosotros = ()=>{

    return(
        <>  
        <WspFloat></WspFloat>
        <section className="contacto">
            <div className="contactoContainerTexto">
                <div className="-titulo">
                    <h4>Sobre Nosotros</h4>
                </div>
                <div className="-texto">
                    <p>proximamente..</p>
                </div>
            </div>
            <div className="contactoContainerImg">
                <img src="" alt="" className="imgNosotros" />
            </div>
        </section>
        </>
    )
}