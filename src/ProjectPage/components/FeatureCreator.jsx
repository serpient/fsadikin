import * as React from 'react';
const ReactMarkdown = require('react-markdown/with-html');

const FeatureCreator = ({ features }) => {
  return features.map((feature, index) => {
    const { title, description, image, video, writeup } = feature;
    return (
      <React.Fragment key={'feature' + index}>
        <hr className="hline" />
        <section className="project-page-feature">
          {title && <div className="project-page-feature-title">{title}</div>}
          {description && <FeatureDescription description={description} />}
          {image && <FeatureImage image={image} />}
          {video && <VideoPlayer link={video} />}
          {writeup && <FeatureLongDescription writeup={writeup} />}
        </section>
      </React.Fragment>
    );
  });
};

export default FeatureCreator;

export const VideoPlayer = ({ link }) => {
  return link.includes('http') === true ? (
    <iframe
      className="project-page-feature--video"
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="resume"
    />
  ) : (
    <section className="project-page-feature--video">
      <video width="100%" height="auto" controls>
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

const FeatureImage = ({ image }) => {
  if (Array.isArray(image)) {
    return image.map(({ link, vertical }) => (
      <img
        className={getImageClass(vertical)}
        src={link}
        alt="project-feature"
      />
    ));
  } else {
    const { link, vertical, size } = image;
    return (
      <img
        className={getImageClass(vertical, size)}
        src={link}
        alt="project-feature"
      />
    );
  }
};

const getImageClass = (vertical, size = 'default') => {
  const orientation = vertical
    ? `project-image--vertical`
    : `project-image--horizontal`;
  return `project-image ${orientation} project-image--${size}`;
};

const FeatureDescription = ({ description }) => {
  return (
    <div className="project-page-feature-description">
      <ReactMarkdown source={description} escapeHtml={false} />
    </div>
  );
};

const FeatureLongDescription = ({ writeup }) => {
  return (
    <div className="project-page-writeup">
      <div className="project-page-feature-description">
        <ReactMarkdown source={writeup} escapeHtml={false} />
      </div>
    </div>
  );
};
