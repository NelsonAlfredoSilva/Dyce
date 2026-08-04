import { DestacadoProducto } from '../../components/Destacado/DestacadoProducto';
import { WspFloat } from '../../components/WspFloat/WspFloat';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { Cards } from '../../components/Cards/Cards';
import { useProductos } from '../../context/ProductosContext';

export const Inicio= ({})=>{
    const {productos} = useProductos();
    //para destacados
    const destacados = productos.filter(
        producto => producto.destacado == true
    );
    return(
        <>
            <WspFloat></WspFloat>
            <BannerSlider></BannerSlider>
            <Cards></Cards>
            
        </>
    )
}
/*<DestacadoProducto destacados={destacados}></DestacadoProducto>*/