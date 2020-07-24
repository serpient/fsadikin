import * as React from 'react';

const removeRelativeLink = string => {
  var index = string.search('http') || string.search('https');
  return string.substring(index);
};

const ProjectLinks = ({ projectData }) => {
  const { liveLink, githubLink, blogLink } = projectData;
  let returnedArray = [];

  if (githubLink) {
    returnedArray.push({
      title: 'Github Link',
      link: removeRelativeLink(githubLink)
    });
  }
  if (blogLink) {
    returnedArray.push({
      title: 'Writeup Link',
      link: removeRelativeLink(blogLink)
    });
  }
  if (liveLink) {
    returnedArray.push({
      title: 'Live Link',
      link: removeRelativeLink(liveLink)
    });
  }

  return returnedArray.map((linkObject, idx) => {
    return (
      linkObject.link && (
        <a
          key={idx}
          href={linkObject.link}
          target="_blank"
          className="main-navi-btn"
          rel="noopener noreferrer"
        >
          {linkObject.title}
        </a>
      )
    );
  });
};

export default ProjectLinks;
