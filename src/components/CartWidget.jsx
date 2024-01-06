import CarritoCom from "../assets/cart4.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary position-relative">
  <img src={CarritoCom} alt="carrito" width={40} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    4
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
      
    );
};
export default CartWidget;
