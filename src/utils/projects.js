const Chingu = {
    name: 'Chingu',
    date: 'July. 2018 - Current',
    tech: ['React', 'Apollo'],
    description: `Chingu is aims to build a coding platform where programmers elevate their skills by building a project in 8 weeks 
                with a remote team. The platform helps users by providing a formal user application process, access to collab tools 
                such as a team newsfeed and project pages for the teams finished project. `,
    workDone: [
        'Acted as designer and front-end web developer in a remote engineering team of 8',
        'Work as sole designer to re-brand the Chingu platform on the admin and user side.',
        'Worked as part of the front-end team to code the user-facing side with React and Apollo (which grabs API data from GraphQL)'
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
            image: require('../assets/chingu-voyage-application-2.png')
        },
        {
            title: 'Voyage Portal',
            description: `Users can apply to upcoming voyages from this page.`,
            image: require('../assets/chingu-voyage.png')
        },
        {
            title: 'Newsfeed',
            description: `Once accepted as a user and part of a team, users can get the most updated news from Chingu and their teams from the newsfeed.
                        The Team newsfeed will feature a team card which describes the team projects, teammates, and
                        links to team related tools such as team standup forms, public project page, and team workspace page`,
            image: require('../assets/Chingu-Example NewsFeed.png')
        },
        // {
        //     title: 'Weekly Checkin',
        //     description: `Admin use this data to spot problematic teams and team members, at which point, 
        //                 admin can then intervene and try to get the team back on track.`,
        //     image: require('../assets/chingu-checkin.png')
        // },
        {
            title: 'Project Page',
            description: `Teams can create a project page for their specific project. Upon completion, the page will be submitted
                        to the admins and displayed in the Project Showcase section on the site where all team projects are visible. 
                        Description section is markdown supported.`,
            image: require('../assets/chingu-project-page.png')
        },
        {
            title: 'User Profile',
            description: `Users have an overview of all of their current and past projects. Users can also update their bios using the editable text fields.`,
            image: require('../assets/chingu-user-profile.png')
        },
        {
            title: 'Ticketbox',
            description: `The persistent ticketbox modal helps users easily log issues and suggestions for the site, as well as log any team
                        conflict issues they want the admin's help on.`,
            image: require('../assets/ticketbox-01.png')
        },
        // {
        //     title: 'Landing Page Re-Design',
        //     description: `Redesign the flow of information on the landing page, so that users have
        //                   a clear vision of what Chingu is, who the targeted audience is, and what
        //                   Chingu can provide for users.`,
        //     image: require('../assets/chingu-home.png')
        // }
    ]
}

const projectMatch = {
    name: 'Project Match',
    date: 'Feb. 2018 - July. 2018',
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