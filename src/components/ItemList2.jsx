import PropTypes from "prop-types";

import Item2 from "./Item2";



function ItemList2({ items }) {
    return (
        <div className="container my-5">
            <div className="row">
                {items.map((item) => (
                    <Item2 key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

ItemList2.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemList2;
