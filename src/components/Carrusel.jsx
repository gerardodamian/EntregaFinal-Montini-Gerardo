import ImgCarr from '../assets/bici-01.png'
import ImgFut from '../assets/futbol.jpg'
import ImgVol from '../assets/voley.jpg'

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
                    <img src={ImgCarr}width={1900}height={600} />
                </div>
                <div className="carousel-item">
                    <img src= {ImgFut} width={1900} height={550}/>
                </div>
                <div className="carousel-item">
                    <img src={ImgVol}width={1900} height={550} />
                </div>
            </div>
        </div>
    </section>
    )
}
export default Carrusel;