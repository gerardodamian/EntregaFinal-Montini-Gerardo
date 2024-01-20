import PropTypes from "prop-types";
import ItemCount from "./itemCount";
import arrayProductos from "./Articulos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <>
            <ItemList items={items} />
            <ItemCount stock={10} />
        </>
    );
};
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};
export default ItemListContainer;
