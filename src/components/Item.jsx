import PropTypes from "prop-types";

const Item = ({ item }) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card ">
                <img
                    src={item.image}
                    className="card-img-top"
                    alt={Item.nombre}
                />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.array.isRequired,
};

export default Item;
