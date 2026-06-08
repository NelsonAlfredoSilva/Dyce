import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer/Footer' ;
import { Header } from '../components/Header/Header'
import { Children } from "react";

export const LayoutPublic = (children)=>{


    return(
        <>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </>
    )
}