import PropTypes from "prop-types";

const ComprarCarr = ({ valor }) => {
    return <h6 className="p-2">Total:{valor}</h6>;
};

ComprarCarr.propTypes = {
    valor: PropTypes.string.isRequired,
};

export default ComprarCarr;
