const Form_Creator = {
    name: 'Form Creator V1',
    date: 'Aug. 2018',
    tech: ['React'],
    description: `Data driven form creator in React.`,
    workDone: [
        'Convert question data objects into a fully functioning form.',
        'Implement standard input elements such as radio, checkbox, textarea, etc.',
        'Standardize form styling for all question and answer components.',
        'Fully integrated change handlers in all input elements hooked up to parent state management.',
    ],
    liveLink: 'https://serpient.github.io/form-creator/',
    githubLink: 'https://github.com/serpient/form-creator',
    coverPhoto: require('../assets/form-creator_1000.png'),
    features: [
        {
            title: 'Converts data into React form',
            description: `Takes array of question objects and converts it into a fully functioning form`,
            image: require('../assets/form-creator-main.png')
        },
    ]
}

const Book_Finder = {
    name: 'Book Finder',
    date: 'Jan. 2019',
    tech: ['React', 'Jest/Enzyme'],
    description: `Powered by Google Books API, search for any book and find more information about it.`,
    workDone: [
        'Design and implement web app in React.',
        'Test units for mock async API calls, and rendering edge cases using Jest/Enzyme',
        'Use media queries to make app mobile responsive'
    ],
    liveLink: 'https://quiet-brushlands-15098.herokuapp.com/',
    githubLink: 'https://github.com/serpient/google-books-api',
    coverPhoto: require('../assets/book-finder_1000.png'),
    features: [
        {
            title: 'Book Finder Usability',
            description: `App has error handling and edge cases.`,
            image: require('../assets/book-finder.gif')
        },
    ]
}

const Connect_4 = {
    name: 'Connect 4',
    date: 'Jan. 2019',
    tech: ['React', 'Jest/Enzyme'],
    description: `Connect 4 game with 2 local players. Match 4 coins horizontally, vertically, or diagonally to win.`,
    workDone: [
        'Design and implement game in React',
        'Test units for horizontal, vertical and diagonal wins using Jest/Enzyme.',
    ],
    liveLink: 'https://serpient.github.io/connect-4/',
    githubLink: 'https://github.com/serpient/connect-4',
    coverPhoto: require('../assets/connect-4_1000.png'),
    features: [
        {
            title: 'Connect 4 Gameplay',
            // description: `Admin can create and manage voyages`,
            image: require('../assets/connect-4-short.gif')
        },
    ]
}

const Chingu = {
    name: 'Chingu',
    date: 'July. 2018 - Current',
    tech: ['React', 'Apollo', 'GraphQL', 'D3'],
    description: `Chingu aims to build a coding platform in which programmers elevate their technical and soft skills by building a project in 8 weeks with a remote team.
                The client facing sites are built with React and Apollo Client (GraphQL).`,
    workDone: [
        'Sole designer to mockup and implement custom styles and page layouts on the entire platform.',
        'Part of a 3-person team using React and Apollo / GraphQL to build the front-end.',
        'Launched and running a Beta cohort with a test group of 100 users.',
        `Reduced code reuse and ease of development by implementing reusable input elements and standardized styles for a data-driven form creator.`,
        `Reduced team sorting process from 4-Days to 4-Hours by using D3 data visualization to sort users into teams.`,
        `Provided a funnel for user submitted help/bug/suggestion tickets by implementing a floating ticketbox entirely in React.`,
    ],
    liveLink: 'https://beta.chingu.io/',
    githubLink: 'https://github.com/chingu-x/chingu-frontend/tree/master',
    blogLink: 'https://medium.com/@fsadikin/team-sort-version-1-afea3c018120',
    coverPhoto: require('../assets/chingu.png'),
    features: [
        {
            title: 'Team Sort',
            description: `Chingu needs to sort hundreds of users into teams, a process which currently takes a 
                            few days of manual sorting by one guy. We needed a solution that makes this time intensive 
                            process more efficient so it can scale as Chingu’s community grows. 
                            
                            The first version of Team Sort features a D3-Force Graph to visualize the closest matches to a selected user, 
                            React Drag-and-Drop areas to set teams, and a interactive table to quickly pull up all applicant data.`,
            image: require('../assets/Team-Sort-Features.png'),
            video: 'https://www.youtube.com/embed/VPtOTSXOl-A',
        },
        {
            title: 'Forms & Applications',
            description: `Chingu was previously using external tools such as Google Forms and Excel
                        to handle new applications and extract data. The new Chingu site has formal
                        forms from which data can be extracted to efficiently approve users, and sort them
                        into teams on the admin side.`,
            image: require('../assets/chingu-voyage-application-2.png')
        },
        {
            title: 'Newsfeed',
            description: `Once accepted as a user and part of a team, users can get the most updated news from Chingu and their teams from the newsfeed.
                        The Team newsfeed will feature a team card which describes the team projects, teammates, and
                        links to team related tools such as team standup forms, public project page, and team workspace page`,
            image: require('../assets/Chingu-Example NewsFeed.png')
        },
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
    ]
}

const projectMatch = {
    name: 'Project Match',
    date: 'Feb. 2018 - July. 2018',
    tech: ['MongoDB', 'Express', 'React', 'NodeJS', 'TypeScript', 'Redux'],
    description: `Project Match is a full-stack web app created with the MERN stack with typescript integration. 
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
    blogLink: 'https://medium.com/@fsadikin/project-match-post-mortem-3f79496d727d',
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
        }
        // {
        //     title: 'Project Showcase',
        //     description: `Once your project is complete, enter it into the Project Showcase where 
        //                     users can rate the project based off its design, usability, and code quality. `,
        //     image: require('../assets/project-match-project-showcase.png')
        // }
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
    blogLink: 'https://medium.com/chingu/turtlestab-chrome-extension-a-chingu-voyage-2-project-97d5b664d2fd',
    coverPhoto: require('../assets/turtleTab.png'),
    features: [
        {
            title: 'Project Walkthrough',
            video: 'https://www.youtube.com/embed/Lp4x_BwPMho',
        },
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

export const projects = new Map([
    ['chingu', Chingu],
    ['connect-4', Connect_4],
    ['book-finder', Book_Finder],
    ['form-creator', Form_Creator], 
    ['project-match', projectMatch], 
    ['turtle-tab', turtleTab]
]);