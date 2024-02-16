import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList2 from "./ItemList2";

const ItemListContainer2 = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const colRef = collection(db, "deportes-del-centro");
        let q = colRef;

        if (id) {
            q = query(colRef, where("categoria", "==", id));
        }

        getDocs(q).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setItems(data);
        });
    }, [id]);

    return (
        <>
            <ItemList2 items={items} />
        </>
    );
};

export default ItemListContainer2;
