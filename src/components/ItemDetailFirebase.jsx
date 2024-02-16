import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemDetail from "./ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailFrirebase = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "deportes-del-centro", id);

        getDoc(docRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    return <>{item !== null && <ItemDetail item={item} />}</>;
};

ItemDetailFrirebase.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ItemDetailFrirebase;
