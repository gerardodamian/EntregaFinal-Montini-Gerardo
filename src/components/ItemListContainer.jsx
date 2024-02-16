

//import arrayProductos from "./Articulos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*useEffect(() => {
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

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "deportes-del-centro-2");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);

        });
        console.log("los productos se cargaron")
    },[])*/

    useEffect(()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "deportes-del-centro-2");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        })
    },[id]);

    return (
        <>
            <ItemList items={items} />
        </>
    );
};



export default ItemListContainer;
