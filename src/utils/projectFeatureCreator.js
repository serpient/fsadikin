import * as React from "react";
const ReactMarkdown = require("react-markdown/with-html");

export const projectFeatureCreator = feature => {
  return feature.map((feature, index) => {
    return (
      <React.Fragment key={"feature" + index}>
        <hr className="hline" />
        <section className="project-page-feature">
          {feature.title ? (
            <div className="project-page-feature-title">{feature.title}</div>
          ) : null}
          {feature.description ? (
            <div className="project-page-feature-description">
              <ReactMarkdown source={feature.description} escapeHtml={false} />
            </div>
          ) : null}
          {feature.image && (
            <img
              className="project-image"
              src={feature.image}
              alt="project-feature"
            />
          )}
          {feature.video && (
            <iframe
              className="project-page-feature--video"
              src={feature.video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="resume"
            />
          )}
        </section>
      </React.Fragment>
    );
  });
};
