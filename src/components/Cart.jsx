import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg"

const Cart = () => {
    const { cart, removeItem, clear, cantTotalProductos, sumaTotalProductos } =
        useContext(CartContext);

    if (cantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">🛒</p>
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-primary my-5">
                            Volver a la pagina principal
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.image}
                                            alt={product.nombre}
                                            width={80}
                                        />
                                    </td>
                                    <td>{product.nombre}</td>
                                    <td>${product.precio} </td>
                                    <td>{product.cantidad}</td>
                                    <td>
                                        ${product.cantidad * product.precio}
                                    </td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={() => {
                                                removeItem(product.id);
                                            }}
                                        >
                                            <img
                                                src={trash}
                                                alt="Eliminar Producto"
                                                title="Eliminar Producto"
                                            />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>Suma total</td>
                                <td>${sumaTotalProductos()}</td>
                                <td>&nbsp;</td>
                                <td>
                                    <Link
                                        to={"/checkout"}
                                        className="btn btn-primary"
                                    >
                                        Checkout
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={clear}>
                        Vaciar Carrito{" "}
                        <span style={{ marginRight: "5px" }}>
                            <img
                                src={trash}
                                alt="Eliminar Producto"
                                title="Eliminar Producto"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
