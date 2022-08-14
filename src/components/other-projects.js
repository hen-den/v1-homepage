export function FeaturedProjects(props) {

    return (

        <section className="section featured-projects">
            <div className="section__title">Featured Projects</div>
            <div className="section__content">
                {props.projects.map(project => {
                    return (

                        <div className={`project ${project.name}`}>
                            <figure className="project__pic">
                                <a href="https://blistabloc.com/" target="_blank">
                                    <img src={project.img_url} alt="" />
                                </a>
                            </figure>
                            <figcaption className="project__caption">
                                <div className="project__name">
                                    <a href={project.url} target="_blank">{project.name}</a>
                                </div>
                                <p>{project.description}</p>
                            </figcaption>
                        </div>

                    );
                })}

            </div>
        </section>

)
}
