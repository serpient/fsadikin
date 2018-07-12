import * as React from 'react';

export const projectFeatureCreator = (feature) => {
    return feature.map((feature, index) => {
        return (
            <React.Fragment key={"feature" + index}>
                <hr className="hline" />
                <div className="project-page-feature">
                    {feature.title ? <div className="project-page-feature-title">{feature.title}</div> : null }
                    {feature.description ? <div className="project-page-feature-description">{feature.description}</div> : null}
                    <img
                        className="project-image"
                        src={feature.image}
                        alt="project-feature"
                    />
                </div>
            </React.Fragment>
        );
    })
}