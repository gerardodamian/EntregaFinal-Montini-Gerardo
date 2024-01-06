import Articulos from "./components/Articulos";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";



const App = () => {
    return (
        <div>
            
            <NavBar />
            
            <Carrusel/>
            <ItemListContainer greeting="¡Bienvenido a la tienda de los  1🏀🏐🥎 Deportes!"></ItemListContainer>
            <Articulos/>
            <Footer/>
        </div>
    );
};

export default App;
