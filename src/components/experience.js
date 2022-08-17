export function Experience(props) {

    return (

        <section className="section experience">
            <div className="section__title">Experience</div>
            <div className="section__content">
                <div className="jobs">
                    {props.experience.map(job => {
                        return (

                            <div className="job">
                                <div className="time-place">
                                    <div className="job__company">
                                        <a href={job.url} target="_blank">{job.company}</a>
                                    </div>
                                    <div className="job__time">{job.time}</div>
                                </div>
                                <div className="job__position">{job.position}</div>
                            </div>

                        );
                    })}

                </div>

                <a href="mailto:mertkan.henden@gmx.de" target="_blank" className="arrow-link">Request My Resume</a>
            </div>
        </section>

)
}
