
import Articulos2 from "./components/Articulos2";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";



const App = () => {
    return (
        <div>
            
            <NavBar />
            
            <Carrusel/>
            <ItemListContainer greeting="¡Bienvenido a la tienda de los  🏒🏀🏐🥎 Deportes!"></ItemListContainer>
            
            <Articulos2/>
            <Footer/>
        </div>
    );
};

export default App;
