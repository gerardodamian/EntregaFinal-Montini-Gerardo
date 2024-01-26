import PropTypes from "prop-types";

import { useState } from "react";
import Comprar from "./Comprar";

const CompAgregar = ({ precio }) => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };
    const decrementar = () => {
        if (contador > 0) setContador(contador - 1);
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
            <Comprar valor={precio} contador={contador} />
        </>
    );
};

CompAgregar.propTypes = {
    precio: PropTypes.number.isRequired,
};
export default CompAgregar;
