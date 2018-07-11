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
    coverPhoto: require('../assets/project-match.png')
}

const turtleTab = {
    name: 'TurtleTab',
    date: 'Nov. 2017',
    tech: ['React', 'Redux'],
    description:    `TurtleTab is a Google Chrome Extension Built with React. It creates a new homepage which features current 
                    Weather, Todo and Notes functionality. It also accesses your browser data to see Bookmarks, 
                    enable/disable Apps and Extensions, and see/clear your History. It is a collaborative effort 
                    by a remote team of aspiring developers who met on Chingu, an international community of coders.`,
    liveLink: 'https://chrome.google.com/webstore/detail/turtletab/imaanfkbpecmdapjnoonjjbofnfplcbd/reviews?hl=en',
    githubLink: 'https://github.com/chingu-coders/Voyage2-Turtles-11',
    coverPhoto: require('../assets/turtleTab.png')
}

export const projects = [projectMatch, turtleTab];