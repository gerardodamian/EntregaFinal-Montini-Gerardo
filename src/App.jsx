import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articulos2 from "./components/Articulos2";
import Carrusel from "./components/Carrusel";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import ItemCount from "./components/itemCount";
import Error404 from "./components/Error404";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Carrusel />
            <Routes>
                <Route
                    path={"/"}element={<ItemListContainer  />}></Route>

<Route
                    path={"*"}element={<Error404 />}></Route>   
                
                
                <Route path={"/Articulos2"} element={<Articulos2 />}></Route>

            </Routes>
            <ItemCount stock={10}/>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
