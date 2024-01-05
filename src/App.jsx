import Articulos from "./components/Articulos";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";



const App = () => {
    return (
        <div>
            
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a la tienda de deportes!"/>
            <Articulos/>
            <Footer/>
        </div>
    );
};

export default App;
