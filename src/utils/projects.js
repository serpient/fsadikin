const Chingu = {
    name: 'Chingu',
    date: 'July. 2018 - Current',
    tech: ['React', 'Apollo'],
    description: `Chingu is building a global collaboration platform and coding-cohort generator. 
                    The platform supports programmers and the admin team who manages the Chingu
                    community by providing a formal user application process for available Build To Learn Voyages
                    and a process for admins to approve applicants, sort them into teams and check on the "health"
                    of each cohort and voyage as a whole. `,
    workDone: [
        'Acted as designer and front-end web developer in a remote team of 8',
        'Designed the user and admin portions of the platform.',
        'Coded the user-facing side with React and Apollo (which grabs API data from GraphQL)'
    ],
    liveLink: 'https://fb.chingu.io/',
    githubLink: 'https://github.com/luoto/chingu-frontend/tree/development',
    coverPhoto: require('../assets/chingu.png'),
    features: [
        {
            title: 'Forms & Applications',
            description: `Chingu was previously using external tools such as Google Forms and Excel
                        to handle new applications and extract data. The new Chingu site has formal
                        forms from which data can be extracted to efficiently approve users, and sort them
                        into teams on the admin side.`,
            image: require('../assets/chingu-registration.JPG')
        },
        {
            title: 'Voyage Portal',
            description: `Users can apply to upcoming voyages from this page.`,
            image: require('../assets/chingu-voyage.png')
        },
        {
            title: 'User Profile',
            description: `Users have an overview of all current and past voyages, and submit weekly-checkins
                        for their current teams.`,
            image: require('../assets/chingu-user-profile.png')
        },
        {
            title: 'Weekly Checkin',
            description: `Admin use this data to spot problematic teams and team members, at which point, 
                        admin can then intervene and try to get the team back on track.`,
            image: require('../assets/chingu-checkin.png')
        },
        {
            title: 'Landing Page Re-Design',
            description: `Redesign the flow of information on the landing page, so that users have
                          a clear vision of what Chingu is, who the targeted audience is, and what
                          Chingu can provide for users.`,
            image: require('../assets/chingu-home.png')
        }
    ]
}

const projectMatch = {
    name: 'Project Match',
    date: 'Feb. 2018 - Current',
    tech: ['MongoDB', 'Express', 'React', 'NodeJS', 'TypeScript', 'Redux'],
    description: `Project Match is a web app created with the MERN stack with typescript integration. 
                    It's primary function is to help programmers and designers match with projects they would be interested in. 
                    Project Match will then provide team collaboration tools to support new teams with features such as a 
                    dedicated platform for mockup reviews/redlines and group chat.`,
    workDone: [
        'Acted as Project Manager, Designer, and Full-Stack Programmer in a remote team of 4.',
        'Working primarily on the front-end using React/Redux.',
        'Coded the User and Project backend API routes and associated test units.',
        'Implemented git and git pull request workflow to prevent merge conflicts and facilitate code reviews.'
    ],
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
    date: 'Oct. 2017',
    tech: ['React', 'Redux'],
    description: `TurtleTab is a Google Chrome Extension Built with React. It creates a new homepage which features current 
                    Weather, Todo and Notes functionality. It also accesses your browser data to see Bookmarks, 
                    enable/disable Apps and Extensions, and see/clear your History. It is a collaborative effort 
                    by a remote team of aspiring developers who met on Chingu, an international community of coders.`,
    workDone: [
        'Acted as Project Manager, Designer, and Front-End Programmer in a remote team of 4.',
        'Worked on the Weather Tab (fetches from the OpenWeatherMap API), Notes Tab, and the Bookmarks Tab (fetches user data from the Google Chrome  API).'
    ],
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

export const projects = [Chingu, projectMatch, turtleTab];