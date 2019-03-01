import * as React from 'react';
import { skillCreator } from '../utils/skillCreator';
import { projectFeatureCreator } from '../utils/projectFeatureCreator';

const removeRelativeLink = string => {
  var index = string.search('http');
  return string.substring(index);
};

const projectLinks = projectData => {
  let returnedArray = [
    {
      title: 'Live Link',
      link: removeRelativeLink(projectData.liveLink),
    },
    {
      title: 'Github Link',
      link: removeRelativeLink(projectData.githubLink),
    },
  ];

  if (projectData.blogLink) {
    returnedArray.push({
      title: 'Writeup Link',
      link: removeRelativeLink(projectData.blogLink),
    });
  }

  return returnedArray;
};

export const individualProjectPageCreator = (projectData, mainImage) => {
  return (
    <section className="individual-project-container">
      <img
        className="project-image project-image-padding"
        src={require('../assets/' + mainImage)}
        alt="main-project"
      />
      <div className="project-page-title">{projectData.name}</div>
      <div className="project-page-description">{projectData.description}</div>
      <div className="project-page-work">
        <div className="project-page-work--title">My Accomplishments</div>
        {projectData.workDone.map((role, index) => {
          return (
            <div key={index} className="role-container">
              <div className="role" key={index}>
                <i className="role-dot fas fa-check" />
                <div className="role-text">{role}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="project-page-tech">{skillCreator(projectData.tech)}</div>
      <div className="project-page-btns">
        {projectLinks(projectData).map((linkObject, idx) => {
          return (
            linkObject.link && (
              <a
                key={idx}
                href={linkObject.link}
                rel="external"
                target="_blank"
                className="main-navi-btn"
              >
                {linkObject.title}
              </a>
            )
          );
        })}
      </div>
      {projectFeatureCreator(projectData.features)}
    </section>
  );
};
