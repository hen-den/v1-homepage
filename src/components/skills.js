export function Skills(props) {

    return (
        <section className="section skills">
            <div className="section__title">Skills</div>
            <div className="section__content">
                <div className="skillz">
                    <div className="skillz__category">
                        <div className="skillz__category__label">Languages</div>
                        <ul>

                            {props.languages.map(language => {
                                return (
                                    <li className="skillz__category__item">{language}</li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="skillz__category">
                        <div className="skillz__category__label">Frameworks</div>
                        <ul>

                            {props.frameworks.map(framework => {
                                return (
                                    <li className="skillz__category__item">{framework}</li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="skillz__category">
                        <div className="skillz__category__label">Tools</div>
                        <ul>

                            {props.tools.map(tool => {
                                return (
                                    <li className="skillz__category__item">{tool}</li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="skillz__category">
                        <div className="skillz__category__label">Design</div>
                        <ul>
                            {props.design.map(thing => {
                                return (
                                    <li className="skillz__category__item">{thing}</li>
                                );
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </section>


    )
}
