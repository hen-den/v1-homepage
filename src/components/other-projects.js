export function OtherProjects(props) {

    return (

        <section className="section other-projects">
            <div className="section__title">Featured Projects</div>
            <div className="section__content">

                {props.projects.map(project => {
                    return (

                        <div className="project">
                            <div className="project__name">
                                <a href={project.url} target="_blank">{project.name}</a>
                            </div>
                            <p style={{whiteSpace:"pre-wrap"}}>{project.description}</p>
                            <div className="project__used">

                                {project.used.map(thing => {
                                    return (
                                        <span className="project__used__item">{thing}</span>
                                    );
                                })}

                            </div>
                        </div>


                    );
                })}

            </div>
        </section>

    )
}
