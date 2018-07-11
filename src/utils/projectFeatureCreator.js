import * as React from 'react';

export const projectFeatureCreator = (feature) => {
    return feature.map(feature => {
        return (
            <React.Fragment>
                <hr className="hline" />
                <div className="project-page-feature">
                    <div className="project-page-feature-title">{feature.title}</div>
                    <div className="project-page-feature-description">{feature.description}</div>
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