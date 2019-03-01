const ProjectLinks = ({ projectData }) => {
  let returnedArray = [
    {
      title: "Live Link",
      link: removeRelativeLink(projectData.liveLink)
    },
    {
      title: "Github Link",
      link: removeRelativeLink(projectData.githubLink)
    }
  ];

  if (projectData.blogLink) {
    returnedArray.push({
      title: "Writeup Link",
      link: removeRelativeLink(projectData.blogLink)
    });
  }

  return returnedArray.map((linkObject, idx) => {
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
  });
};

export default ProjectLinks;
