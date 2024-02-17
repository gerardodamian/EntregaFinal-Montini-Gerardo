import ImgCarr from '../assets/bici-01.png'


const Carrusel = () => {
    return (
        <section className="carr-1">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ImgCarr} alt="Carrusel 1" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarr} alt="Carrusel 1" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={ImgCarr} alt="Carrusel 1" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Carrusel;