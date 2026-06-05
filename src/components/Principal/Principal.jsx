import { Botones } from '../Botones/Botones';
import './Principal.css'
export const Principal = () => {
    return (
        <section className="contenedor">
            <div className='size_50 direccion_en_columna'>
                <div className='resaltado_verde'>Componentes Electrónicos de Alta Calidad</div>
                <p className='size_50 titular'>
                    La mejor <span className='fuente_azul'>Tecnología</span> al
                    Alcance de tus 
                    Proyectos
                </p>
                <div>
                    <p>Mas de 10.000 Componentes electrónicos en stock.</p>
                    <p>Distribuidores Autorizados de las mejores marcas mundiales.</p>
                </div>
                <div className='boton_opciones'>
                    <Botones texto="Ver catalogo" className="prinPerso"></Botones>
                    <Botones texto="Contactar ventas" className="prinPerso"></Botones>
                </div>
            </div>
            
            <div className='size_50'>
                <div>
                    <div>
                        <p>Semiconductores</p>
                        <p>+3.000 referencias</p>
                    </div>
                    <div>
                        <h1>10K+</h1>
                        <p>Productos en Stock</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Envío en 24hs</p>
                        <p>a todo el pais</p>
                    </div>
                    <div className='fondo_azul'>
                        <h1>15+</h1>
                        <h5>Años de experiencia</h5>
                    </div>
                </div>
            </div>
        </section>
    ) 
}