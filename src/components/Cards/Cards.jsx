import "./Cards.css";

export const Cards = ({estiloAdd, children}) => {
    return (
        <div className={`contenedor__cards ${estiloAdd}`}>
            {children}
        </div>
    ) 
}