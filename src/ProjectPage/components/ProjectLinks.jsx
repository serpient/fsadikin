import * as React from "react";

const removeRelativeLink = string => {
  var index = string.search("http");
  return string.substring(index);
};

const ProjectLinks = ({ projectData }) => {
  let { liveLink, githubLink, blogLink } = projectData;
  let returnedArray = [
    {
      title: "Live Link",
      link: removeRelativeLink(liveLink)
    },
    {
      title: "Github Link",
      link: removeRelativeLink(githubLink)
    }
  ];

  if (blogLink) {
    returnedArray.push({
      title: "Writeup Link",
      link: removeRelativeLink(blogLink)
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
