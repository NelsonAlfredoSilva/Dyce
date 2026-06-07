
import "./Card.css";

export const Card = ({estiloAdd, children}) => {
    return (
        <div className={`contenedor__cards ${estiloAdd}`}>
            {children}
        </div>
    ) 
}