
import {Principal} from '../../components/Principal/Principal';
import { DestacadoCategoria } from '../../components/Destacado/DestacadoCategoria';
import { DestacadoProducto } from '../../components/Destacado/DestacadoProducto';
export const Inicio= ({productos})=>{
    //para destacados
    const destacados = productos.filter(
        producto => producto.destacado == true
    );
    return(
        <>
            <Principal></Principal>
            <DestacadoCategoria></DestacadoCategoria>
            <DestacadoProducto destacados={destacados}></DestacadoProducto>
        </>
    )
}