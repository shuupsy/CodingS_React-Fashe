import { useState } from "react";
import "../style/carousel.css"
const Carousel = () => {
    let tabImg = ["img1", "img2", "img3"]
    let choixoffi = 0;
    let [carousel, setcarousel] = useState({
        choix: 0,
        montab: tabImg[choixoffi]
    })
    choixoffi = carousel.choix
    function slideAfter() {
        carousel.choix = carousel.choix + 1
        if (carousel.choix >= 3) {
            carousel.choix = 0
        }
        choixoffi = carousel.choix
        setcarousel({
            choix: carousel.choix,
            montab: tabImg[choixoffi]
        })

    }
    function slideBefore() {
        carousel.choix = carousel.choix - 1
        if (carousel.choix < 0) {
            carousel.choix = 2
        }
        choixoffi = carousel.choix
        setcarousel({
            choix: carousel.choix,
            montab: tabImg[choixoffi]
        })

    }
    return (
        <div className={carousel.montab}>
            <div className="slideContainer">
                <button className="slideBefore btnSlide" onClick={() => slideBefore()}><div className="select">AVANT</div></button>
                <button className="slideAfter btnSlide" onClick={() => slideAfter()}><div className="select">APRES</div></button>
            </div>
        </div>
    );
}
export default Carousel;