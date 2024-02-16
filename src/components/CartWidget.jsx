import { useContext } from "react";
import CarritoCom from "../assets/cart4.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantTotalProductos } = useContext(CartContext);
    return cantTotalProductos() > 0 ? (
        <Link to={"/cart"} className="btn btn-primary position-relative">
            <img src={CarritoCom} alt="carrito" width={40} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantTotalProductos()}
                <span className="visually-hidden">unread messages</span>
            </span>
        </Link>
    ) : (
        " "
    );
};
export default CartWidget;
