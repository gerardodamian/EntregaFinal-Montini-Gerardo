import { useEffect, useState } from "react";

const Articulos2 = () =>{

    const [productos2, setProductos2] = useState([]);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProductos2(json);
            });

    })

    

            return (
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Articulos Importados</h2>
                        </div>
                    </div>
                    <div className="row">
                        {productos2.map(produ =>(
                            <div key={produ.id} className="col-md-3">
                            <div className="card">
                                <img src={produ.image} className="img-fluid" alt={produ.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{produ.title}</h5>
                                    <p className="card-text">${produ.price}</p>
                                    <a href="#" className="btn btn-primary">Comprar 🛒</a>
                                </div>
                            </div>
                        </div>
                
                    ))}

                    </div>
                </div>
                
                
                
            )
}


export default Articulos2;