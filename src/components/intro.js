export const Intro = () => {
    return (
        <header className="intro">
            <h1 className="intro__hello">Hello!
                <span className="emoji wave-hand animated"></span>
            </h1>

            <h2 className="intro__tagline">I'm
                <span className="name"> Mertkan Henden</span>, a design-minded front-end software engineer focused on
                building beautiful interfaces &amp; experiences
                <span className="emoji technologist"></span>
            </h2>

            <h3 className="intro__contact">
                <span>Get in touch </span>
                <span className="emoji pointer"></span>
                <span>
                  <a href="mailto:brittany.chiang@gmail.com" target="_blank"
                     className="highlight-link">brittany.chiang@gmail.com</a>
                </span>
            </h3>
        </header>

    )
}
