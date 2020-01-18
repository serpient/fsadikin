const Turtles_Tab = {
  name: "TurtlesTab",
  date: "Oct. 2017",
  tech: ["React", "Redux", "JavaScript"],
  description: `TurtleTab is a Google Chrome Extension Built with React. It creates a new homepage which features current 
                    Weather, Todo and Notes functionality. It also accesses your browser data to see Bookmarks, 
                    enable/disable Apps and Extensions, and see/clear your History. It is a collaborative effort 
                    by a remote team of aspiring developers who met on Chingu, an international community of coders.`,
  workDone: [
    "Acted as Project Manager, Designer, and Front-End Programmer in a remote team of 4.",
    "Worked on the Weather Tab (fetches from the OpenWeatherMap API), Notes Tab, and the Bookmarks Tab (fetches user data from the Google Chrome  API)."
  ],
  liveLink:
    "https://chrome.google.com/webstore/detail/turtletab/imaanfkbpecmdapjnoonjjbofnfplcbd/reviews?hl=en",
  githubLink: "https://github.com/chingu-coders/Voyage2-Turtles-11",
  blogLink:
    "https://medium.com/chingu/turtlestab-chrome-extension-a-chingu-voyage-2-project-97d5b664d2fd",
  coverPhoto: require("../assets/turtleTab.png"),
  mainImage: require("../assets/turtleTab-main.png"),
  features: [
    {
      title: "Project Walkthrough",
      video: "https://www.youtube.com/embed/Lp4x_BwPMho"
    },
    {
      image: require("../assets/turtleTab-search.png")
    },
    {
      image: require("../assets/turtleTab-feature1.png")
    },
    {
      image: require("../assets/turtleTab-feature2.png")
    }
  ]
};

export default Turtles_Tab;
