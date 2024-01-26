import PropTypes from "prop-types";
import ItemCount from "./itemCount";

const ItemDetail = ({ item }) => {
    return (
        <din className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-center">
                    <img
                        src={item.image}
                        alt={item.nombre}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4">
                    <h1>{item.nombre}</h1>
                    <p>{item.description}</p>
                    <p>
                        <b>${item.precio}</b>
                    </p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </din>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.array.isRequired,
};
export default ItemDetail;
