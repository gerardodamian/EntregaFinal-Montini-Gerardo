import PropTypes from "prop-types";

import arrayProductos from "./Articulos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    id
                        ? arrayProductos.filter((item) => item.categoria === id)
                        : arrayProductos
                );
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        });
    }, [id]);

    return (
        <>
            <ItemList items={items} />
        </>
    );
};
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};
export default ItemListContainer;
