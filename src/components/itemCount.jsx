import { useState } from "react"
import PropTypes from "prop-types";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter (counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter (counter - 1);
        }
    }

    const onAdd = () => {
            if (counter <= itemStock) {
                setItemStock(itemStock - counter);
                setCounter(1)
                console.log("agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles");
            }
    }
    return (
        <>
        <div className="row my-1">
            <div className="col-md-2">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                    <button type="button" className="btn btn-primary">{counter}</button>
                    <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agragar al Carrito</button>
                </div>
            </div>
        
        
        </>
    )
}
ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
};

export default ItemCount;