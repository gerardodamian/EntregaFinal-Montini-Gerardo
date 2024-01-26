import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-3  text-center">
            <div className="card ">
                <Link
                    to={"/item/" + item.id}
                    className="text-decoration-none text-dark"
                >
                    <img
                        src={item.image}
                        className="card-img-top"
                        alt={Item.nombre}
                    />
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.array.isRequired,
};

export default Item;
