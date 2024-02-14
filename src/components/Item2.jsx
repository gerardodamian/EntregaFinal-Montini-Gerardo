import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item2 = ({ item }) => {
    return (
        <div className="col-md-3  text-center">
            <div className="card ">
                <Link
                    to={"/item-premium/" + item.id}
                    className="text-decoration-none text-dark"
                >
                    <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.nombre}
                    />
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Item2.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired
    }).isRequired
};

export default Item2;
