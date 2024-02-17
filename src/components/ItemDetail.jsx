import PropTypes from "prop-types";
import ItemCount from "./itemCount";

import Rendering from "./Rendering";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    };

    return (
        <din className="container">
            <Rendering />
            <div className="row">
                <div className="col-md-5 offset-md-1 text-center ">
                    <img
                        src={item?.image}
                        alt={item?.nombre}
                        className="img-fluid "
                    />
                </div>
                <div className="col-md-4 text-center ">
                    <h1>{item?.nombre}</h1>
                    <p>{item?.descripcion}</p>
                    <p>
                        <b>${item?.precio}</b>
                    </p>
                    <ItemCount stock={item?.stock} onAdd={onAdd} />
                </div>
            </div>
        </din>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object.isRequired,
};
export default ItemDetail;
