import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    const handleCompra = () => {};
    return (
        <div className="card">
            <img src={product.img} alt={product.nombre} />
            <h3 className="nombre">{product.nombre}</h3>
            <p className="price">${product.precio}</p>
            <button className="comprar" onClick={handleCompra}>
                Comprar 🛒
            </button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        cantidad: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;
