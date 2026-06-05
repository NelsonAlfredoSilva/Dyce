import { Cards } from '../Cards/Cards'
import './Principal.css'
export const Principal = () => {
    return (
        <div className="contenedor__principal">
            <section className='size_50per direccion_en_columna'>
                <div className='resaltado_verde'>Componentes Electrónicos de Alta Calidad</div>
                <p className='size_50per titular'>
                    La mejor <span className='fuente_azul'>Tecnología</span> al
                    Alcance de tus 
                    Proyectos
                </p>
                <div>
                    <p>Mas de 10.000 Componentes electrónicos en stock.</p>
                    <p>Distribuidores Autorizados de las mejores marcas mundiales.</p>
                </div>
                <div className='commandGroup'>
                    <button>Ver Catálogo</button>
                    <button>Contactar Ventas</button>
                </div>
            </section>
            
            <section className='size_50per'>
                <div className='size_50per direccion_en_columna justificado_con_espacios'>
                    <Cards>
                        <p>Semiconductores</p>
                        <p>+3.000 referencias</p>
                    </Cards>
                    <Cards>
                        <h1>10K+</h1>
                        <p>Productos en Stock</p>
                    </Cards>
                </div>
                <div>
                    <Cards>
                        <p>Envío en 24hs</p>
                        <p>a todo el pais</p>
                    </Cards>
                    <Cards estiloAdd = "colorFondo_azul">
                        <h1>15+</h1>
                        <h5>Años de experiencia</h5>
                    </Cards>
                </div>
            </section>
        </div>
    ) 
}