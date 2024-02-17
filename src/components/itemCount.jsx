import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    };

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
        }
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
            <div className="row my-3">
                <div className="col-md-4">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={decrementar}
                        >
                            -
                        </button>
                        <button type="button" className="btn btn-primary">
                            {counter}
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={incrementar}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {itemAdded ? (
                        <Link to={"/cart"} className="btn btn-primary">
                            Terminar tu compra
                        </Link>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={addToCart}
                        >
                            Agregar al carrito
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};
ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
