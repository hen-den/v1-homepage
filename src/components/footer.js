import Rockon from '../img/emojis/rockon.png';

export function Footer(props) {

    return (

        <footer className="footer">
            <div className="footer__copyright">
                <div className="top">
                    <span>Design inspired by</span>
                </div>
                <div className="bottom">
                    <span>Brittany Chiang</span>

                </div>
            </div>
            <div className="footer__copyright">
                <div className="top">
                    <span>Developed &amp; Enhanced by</span>
                </div>
                <div className="bottom">
                    <span>Mertkan Henden</span>
                    <img className="emoji" src={Rockon} alt="emoji"/>
                    <span>2022</span>
                </div>
            </div>

            <div className="footer__links">

                {props.links.map(link => {
                    return (

                        <a href={link.url} target="_blank" title={link.title}>
                            <span className="text">{link.title}</span>
                            <img src={link.img_url} alt={link.title} />
                        </a>
                    );
                })}


            </div>
        </footer>


)
}
