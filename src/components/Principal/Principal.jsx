import './Principal.css'
export const Principal = () => {
    return (
        <div className="contenedor">
            <section className='size_50 direccion_en_columna'>
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
                    <button>Ver Catálogo</button>
                    <button>Contactar Ventas</button>
                </div>
            </section>
            
            <section className='size_50'>
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
            </section>
        </div>
    ) 
}