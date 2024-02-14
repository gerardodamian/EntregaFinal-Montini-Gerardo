import { useEffect, useState } from "react";
import Loading from "./Loading";


const Rendering = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {visible ? <Loading/> : ""}
                </div>
            </div>
        </div>
    );
};

export default Rendering;