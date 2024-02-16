import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articulos2 from "./components/Articulos2";

import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrusel from "./components/Carrusel";
import Rendering from "./components/Rendering";
import ItemDetailFirebase from "./components/ItemDetailFirebase";
import ItemListContainer2 from "./components/ItemListContainer2";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/Checkout";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Carrusel />

                <Rendering />
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />} />

                    <Route
                        path={"/categoria/:id"}
                        element={<ItemListContainer />}
                    />

                    <Route
                        path={"/item/:id"}
                        element={<ItemDetailContainer />}
                    />

                    <Route
                        path={"/item-premium/:id"}
                        element={<ItemDetailFirebase />}
                    />
                    <Route path={"/cart"} element={<Cart />} />
                    <Route path={"/checkout"} element={<Checkout />} />
                    <Route path={"*"} element={<Error404 />} />
                    <Route
                        path={"/ItemListContainer2"}
                        element={<ItemListContainer2 />}
                    />
                    <Route path={"/Articulos2"} element={<Articulos2 />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </CartContextProvider>
    );
};

export default App;
