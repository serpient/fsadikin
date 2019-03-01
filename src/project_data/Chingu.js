const Chingu = {
  name: "Chingu",
  date: "July. 2018 - Current",
  tech: ["React", "Apollo Client", "GraphQL", "D3", "CSS/SCSS/CSS Grid"],
  description: `Chingu aims to build a coding platform in which programmers elevate their technical and soft skills by building a project in 8 weeks with a remote team.
                The client facing sites are built with React and Apollo Client (GraphQL).`,
  workDone: [
    `Reduce team sorting time by 50% by implementing a D3 data visualization driven
        workflow for sorting users into teams.`,
    `Increase ease of development by creating reusable input elements and
        standardized styles for a data-driven form creator in React.`,
    `Design and build Chingu's web presence by ideating user features and implement
        them as part of a 3-person team using React and Apollo / GraphQL. Features
        include Landing Page, User Profile, Newsfeed, Project Pages and Ticketbox.`,
    `Establish company aesthetic and branding by prototyping and implementing
        styles, responsive design, and layouts for the entire platform using HTML,
        CSS Grid, and SCSS.`,
    "Tackle user abandonment rates by gathering feedback from users, creating a hypothesis and drafting solutions & metrics to be implemented in the next launch."
  ],
  liveLink: "https://beta.chingu.io/",
  githubLink: "https://github.com/chingu-x/chingu-frontend/tree/master",
  blogLink: "https://medium.com/@fsadikin/team-sort-version-1-afea3c018120",
  coverPhoto: require("../assets/chingu.png"),
  features: [
    {
      title: "Team Sort",
      description: `Chingu currently manually sort hundreds of users into teams using Google Sheets. We needed a solution that can scale as Chingu’s community grows. 
                            <br />
                            <br />
                            Team Sort features a D3 Force Graph to visualize the closest matches to a selected user, 
                            React Drag-and-Drop areas to set teams, and a interactive table to quickly pull up all applicant data.`,
      image: require("../assets/Team-Sort-Features.png"),
      video: "https://www.youtube.com/embed/VPtOTSXOl-A"
    },
    {
      title: "Forms & Applications",
      description: `Chingu was previously using external tools such as Google Forms and Excel
                        to handle new applications and extract data. 
                        <br />
                        <br />
                        The new Chingu site features data-driven form creators to quickly generate new forms and feed data to the admins.`,
      image: require("../assets/chingu-voyage-application-2.png")
    },
    {
      title: "Newsfeed",
      description: `Once accepted as a user and part of a team, users can get the most updated news from Chingu and their teams from the newsfeed.
                        <br />
                        <br />
                        The Team newsfeed features a card with the team projects, teammates, and
                        links to team related tools such as standup forms, public project page, and team workspace.`,
      image: require("../assets/Chingu-Example NewsFeed.png")
    },
    {
      title: "Project Page",
      description: `Teams can create a project page for their specific project. <br />
                        <br />
                        Upon completion, the page will be submitted
                        to the admins and displayed in the Project Showcase. Project Description section is markdown supported.
                        `,
      image: require("../assets/chingu-project-page.png")
    },
    {
      title: "User Profile",
      description: `Users can update their profiles, share their profile page with others, and view their current and past projects.`,
      image: require("../assets/chingu-user-profile.png")
    },
    {
      title: "Ticketbox",
      description: `The persistent ticketbox modal helps users easily log issues and suggestions for the site, as well as log any team
                        conflict issues they want the admin's help on.`,
      image: require("../assets/ticketbox-01.png")
    }
  ]
};

export default Chingu;
