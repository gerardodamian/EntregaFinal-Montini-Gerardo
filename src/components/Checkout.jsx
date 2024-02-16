import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, clear, sumaTotalProductos } = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map((item) => ({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
        }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${
            fecha.getMonth() + 1
        }-${fecha.getFullYear()}-${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotalProductos();
        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then((resultado) => {
            console.log(resultado);
            clear();
            setOrderId(resultado.id);
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Formulario</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => {
                                    setNombre(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => {
                                    setTelefono(e.target.value);
                                }}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={generarOrden}
                        >
                            Generar Orden
                        </button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
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
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>Suma total</td>
                                <td>${sumaTotalProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? (
                        <div
                            className="alert alert-primary p-5 text-center"
                            role="alert"
                        >
                            <p className="display-1">🛒</p>
                            <h1>Gracias por tu compra!</h1>
                            <p>
                                Tu ID de compra es: <b>{orderId}</b>
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
