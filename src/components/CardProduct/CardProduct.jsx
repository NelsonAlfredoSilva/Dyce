
import './CardProduct.css';


export const CardProduct = ({ categoria, nombre, prec, stock, img, descripcion }) => {
    const noStock = stock === 0 ? <p className="noStock">Sin Stock</p> : null
    const bajoStock = stock > 0 && stock <= 5 ? <p className="bajoStock">Bajo Stock</p> : null
    const hayStock = stock > 5 ? <p className="hayStock">Hay Stock</p> : null


    return (
        <>
            <div className="cardConatiner">
                <div className="cardContainerImg">
                    <img src={img}></img>
                </div>
                <div className="cardContainerContent">
                    <div className="-categoria">
                        <p>{categoria}</p>
                    </div>
                    <div className="-titulo">
                        <p>{nombre}</p>
                    </div>
                    <div className="-desc">
                        <p>{descripcion}</p>
                    </div>
                    <div className="-prec">
                        <p>{prec}</p>
                    </div>
                </div>
            </div>
            <div className="cardContainer-stock">
                { noStock }
                {bajoStock}
                {hayStock}
            </div>
        </>
    )
}