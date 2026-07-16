import './Cards.css'
export const Cards = ({})=>{
    
    return(
        <>
            <section className="homeValores">
                <h2>¿Por qué elegirnos?</h2>
                <div className="homeValoresGrid">
                    <div className="homeValorCard">
                        <ion-icon name="hardware-chip-outline" class="valorIcon"></ion-icon>
                        <h3>Semiconductores</h3>
                        <p>+3.000 referencias</p>
                    </div>
                    <div className="homeValorCard">
                        <ion-icon name="cube-outline" class="valorIcon"></ion-icon>
                        <h3>10K de Productos</h3>
                        <p>Cantidad variada de productos.</p>
                    </div>
                    <div className="homeValorCard">
                        <ion-icon name="rocket-outline" class="valorIcon"></ion-icon>
                        <h3>Envío las 24hs</h3>
                        <p>Envios rapidos y cosntantes</p>
                    </div>
                    <div className="homeValorCard">
                        <ion-icon name="ribbon-outline" class="valorIcon"></ion-icon>
                        <h3>+15 Años</h3>
                        <p>En el mercado electronico</p>
                    </div>
                </div>
            </section>
        </>
    )
}