import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-primary p-3 display-5" role="alert" >
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    );
};
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};
export default ItemListContainer;
