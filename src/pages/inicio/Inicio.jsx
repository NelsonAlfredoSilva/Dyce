import { DestacadoProducto } from '../../components/Destacado/DestacadoProducto';
import { WspFloat } from '../../components/WspFloat/WspFloat';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { Cards } from '../../components/Cards/Cards';

export const Inicio= ({productos})=>{
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