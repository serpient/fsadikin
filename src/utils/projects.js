const projectMatch = {
    name: 'Project Match',
    date: 'Feb. 2018 - Current',
    tech: ['MongoDB', 'Express', 'React', 'NodeJS', 'TypeScript', 'Redux'],
    description:    `Project Match is a web app created with the MERN stack with typescript integration. 
                    It's primary function is to help programmers and designers match with projects they would be interested in. 
                    Project Match will then provide team collaboration tools to support new teams with features such as a 
                    dedicated platform for mockup reviews/redlines and group chat.`,
    liveLink: 'https://www.projectmatch.me',
    githubLink: 'https://github.com/ProjectMatch/ProjectMatch',
    coverPhoto: require('../assets/project-match.png'),
    features: [
        {
            title: 'Get Matched',
            description: `Looking for a project to build? Filter through our projects by categories and tags to
                            find a team you want to join! Already got an idea? Post a project to
                            find programmers and designers to help build the project.`,
            image: require('../assets/project-match-project.png')
        },
        {
            title: 'Team Portal',
            description: `Once you find your team, use your dedicated project portal to chat, upload 
                            new mockups to review, and a timeline of all previous mockups discussed`,
            image: require('../assets/project-match-project-portal.png')
        },
        {
            title: 'Mockup Revisions',
            description: `Place symbols to draw attention to graphic issues in the mockup, and discuss 
                            the issue with other team members before marking it as resolved.`,
            image: require('../assets/project-match-revision-Portal.png')
        },
        {
            title: 'User Profile',
            description: `Update your user profile with a bio, techstack and projects so that others 
                            can learn more about you as a potential teammate.`,
            image: require('../assets/project-match-user-profile.png')
        },
        {
            title: 'Project Showcase',
            description: `Once your project is complete, enter it into the Project Showcase where 
                            users can rate the project based off its design, usability, and code quality. `,
            image: require('../assets/project-match-project-showcase.png')
        }
    ]
}

const turtleTab = {
    name: 'TurtlesTab',
    date: 'Nov. 2017',
    tech: ['React', 'Redux'],
    description:    `TurtleTab is a Google Chrome Extension Built with React. It creates a new homepage which features current 
                    Weather, Todo and Notes functionality. It also accesses your browser data to see Bookmarks, 
                    enable/disable Apps and Extensions, and see/clear your History. It is a collaborative effort 
                    by a remote team of aspiring developers who met on Chingu, an international community of coders.`,
    liveLink: 'https://chrome.google.com/webstore/detail/turtletab/imaanfkbpecmdapjnoonjjbofnfplcbd/reviews?hl=en',
    githubLink: 'https://github.com/chingu-coders/Voyage2-Turtles-11',
    coverPhoto: require('../assets/turtleTab.png'),
    features: [
        {
            image: require('../assets/turtleTab-search.png')
        },
        {
            image: require('../assets/turtleTab-feature1.png')
        },
        {
            image: require('../assets/turtleTab-feature2.png')
        }
    ]
}

export const projects = [projectMatch, turtleTab];