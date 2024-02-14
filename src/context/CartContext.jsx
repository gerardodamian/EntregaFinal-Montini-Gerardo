import PropTypes from "prop-types";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const productos = [
        { id: 1, nombre: "coca", precio: 1200 },
        { id: 2, nombre: "pepsi", precio: 1000 },
    ];

    const totalProductos = () => {
        return productos.length;
    };

    const sumaTotal = () => {
        return productos.reduce(
            (acumulador, item) => (acumulador += item.precio),
            0
        );
    };

    return (
        <CartContext.Provider value={{ productos, totalProductos, sumaTotal }}>
            {children}
        </CartContext.Provider>
    );
};


CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContextProvider;
