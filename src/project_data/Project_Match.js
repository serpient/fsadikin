const Project_Match = {
  name: "Project Match",
  date: "Feb. 2018 - July. 2018",
  tech: ["MongoDB", "Express", "React", "NodeJS", "TypeScript", "Redux", "JavaScript"],
  description: `Project Match is a full-stack web app created with the MERN stack with typescript integration. 
                    It's primary function is to help programmers and designers match with projects they would be interested in. 
                    Project Match will then provide team collaboration tools to support new teams with features such as a 
                    dedicated platform for mockup reviews/redlines and group chat.`,
  workDone: [
    "Acted as Project Manager, Designer, and Full-Stack Programmer in a remote team of 4.",
    "Implemented User Profiles, Project Pages, and Landing Page using React/Redux.",
    "Coded the User and Project API routes and associated test units.",
    "Implemented git and git pull request workflow to prevent merge conflicts and facilitate code reviews."
  ],
  liveLink: "https://www.projectmatch.me",
  githubLink: "https://github.com/ProjectMatch/ProjectMatch",
  blogLink:
    "https://medium.com/@fsadikin/project-match-post-mortem-3f79496d727d",
  coverPhoto: require("../assets/project-match.png"),
  mainImage: require("../assets/project-match-main.png"),
  features: [
    {
      title: "Get Matched",
      description: `<b>Looking for a project to build?</b> Filter through our projects by categories and tags to
                            find a team you want to join! 
                            <br />
                            <br />
                            <b>Already got an idea?</b> Post a project to
                            find programmers and designers to help build the project.`,
      image: require("../assets/project-match-project.png")
    },
    {
      title: "Team Portal",
      description: `Once you find your team, use your dedicated project portal to chat, upload 
                            new mockups to review, and a timeline of all previous mockups discussed`,
      image: require("../assets/project-match-project-portal.png")
    },
    {
      title: "Mockup Revisions",
      description: `Place symbols to draw attention to graphic issues in the mockup, and discuss 
                            the issue with other team members before marking it as resolved.`,
      image: require("../assets/project-match-revision-Portal.png")
    },
    {
      title: "User Profile",
      description: `Update your user profile with a bio, techstack and projects so that others 
                            can learn more about you as a potential teammate.`,
      image: require("../assets/project-match-user-profile.png")
    }
    // {
    //     title: 'Project Showcase',
    //     description: `Once your project is complete, enter it into the Project Showcase where
    //                     users can rate the project based off its design, usability, and code quality. `,
    //     image: require('../assets/project-match-project-showcase.png')
    // }
  ]
};

export default Project_Match;
