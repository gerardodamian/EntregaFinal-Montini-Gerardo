import { useState } from "react";
import ComprarCarr from "./Comprar";


const CompAgregar = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };
    const decrementar = () => {
        setContador(contador - 1);
    };
    return (
        <>
            <h6>Agregar al Carrito: {contador}</h6>
            <div className="btn-group">
                <button onClick={incrementar} className="btn btn-Danger fs-6">
                    Agregar
                </button>
                <button onClick={decrementar} className="btn btn-Danger fs-6">
                    Quitar
                </button>
            </div>
            <ComprarCarr valor={contador } />
        </>
    );
};
export default CompAgregar;
