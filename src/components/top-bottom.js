import PointingUp from '../img/emojis/pointing-up.png';

export const TopBottom = () => {

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button id="top-button" style={{display: "inline-block"}} onClick={scrollToTop}>
            <img src={PointingUp} alt="" />
        </button>
    )
}
