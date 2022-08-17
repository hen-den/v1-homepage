export const Intro = (props) => {
    return (
        <div className="intro__twosection">
            <header className="intro">

                    <div className="intro__tagline">
                        <h1 className="intro__hello">Hello!
                            <span className="emoji wave-hand animated"></span>
                        </h1>
                        <h2 className="intro__tagline">I'm
                            <span className="name"> Mertkan Henden</span>, a <span className="name">Data Scientist &amp; Web-Developer</span> focused on
                            supporting the digital transformation of the mobility &amp; manufacturing sector
                            <span className="emoji technologist"></span>
                        </h2>
                        <h3 className="intro__contact">
                            <span>Get in touch </span>
                            <span className="emoji pointer"></span>
                            <span>
                      <a href="mailto:mertkan.henden@gmx.de" target="_blank"
                         className="highlight-link">mertkan.henden@gmx.de</a>
                    </span>
                        </h3>
                    </div>
            </header>

            <header className="picture_intro" >
                <h2 className="intro__tagline">
                    <figure>
                        <img src={props.image.img_url} alt="" />
                    </figure>
                </h2>
            </header>
        </div>
    )
}
