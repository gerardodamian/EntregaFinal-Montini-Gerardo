import CarritoCom from "../assets/logo-carrito.png"

const CartWidget = () => {
    return (
        <div className="carrito">
            <p className="cantidad-carrito">6</p>
            <img src={CarritoCom} alt="carrito" width={70} />
            
        </div>
    );
};
export default CartWidget;
