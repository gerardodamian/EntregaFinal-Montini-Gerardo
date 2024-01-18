import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Comprar = ({ valor, contador }) => {

    const [precioProd, setPrecioProd] = useState (0);

    useEffect(() =>{
        setPrecioProd(Number(valor)* contador)
    } ,[contador, valor])
    return <h6 className="p-2">Total: ${precioProd}</h6>;
};

Comprar.propTypes = {
    valor: PropTypes.string.isRequired,
    contador: PropTypes.string.isRequired,
};

export default Comprar;
