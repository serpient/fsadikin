const Form_Creator = {
  name: "Form Creator V1",
  date: "Aug. 2018",
  tech: ["React"],
  description: `Data driven form creator in React.`,
  workDone: [
    "Systemize form creation by implementing a data-driven form creator that converts question data into a fully functioning form.",
    "Create cohesive form styles and usability by standardizing input elements."
  ],
  liveLink: "https://serpient.github.io/form-creator/",
  githubLink: "https://github.com/serpient/form-creator",
  coverPhoto: require("../assets/form-creator_1000.png"),
  mainImage: require("../assets/form-creator.gif"),
  features: [
    {
      title: "Converts data into React form",
      description: `Takes array of question objects and converts it into a fully functioning form`,
      image: require("../assets/form-creator-main.png")
    }
  ]
};

export default Form_Creator;
