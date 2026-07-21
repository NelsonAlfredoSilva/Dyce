
import './CardProduct.css';


export const CardProduct = ({ categoria, nombre, prec, stock, img, descripcion , className }) => {
    const noStock = stock === 0 ? <p className="noStock">Sin Stock</p> : null;
    const bajoStock = stock > 0 && stock <= 20 ? <p className="bajoStock">Poco Stock</p> : null;
    const hayStock = stock > 20 ? <p className="hayStock">Hay Stock</p> : null ;




    return (
        <>
            <div className={`cardContainer ${className || ''}`}>
                <div className="cardContainerImg">
                    <img src={img}></img>
                </div>
                <div className="cardContainerContent">
                    <div className="-categoria">
                        <p>{categoria}</p>
                    </div>
                    {/** En el titulo se puede colocar el código del producto */}
                    <div className="-titulo">
                        <p>{nombre}</p>
                    </div>
                    <div className="-desc">
                        <p>{descripcion}</p>
                    </div>
                </div>
                <div className="cardContainer-stock">
                    {noStock}
                    {bajoStock}
                    {hayStock}
                </div>
            </div>
        </>
    )
}