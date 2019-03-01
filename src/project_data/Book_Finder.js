const Book_Finder = {
  name: "Book Finder",
  date: "Jan. 2019",
  tech: ["React", "Jest/Enzyme"],
  description: `Powered by Google Books API, search for any book and find more information about it. Website demonstrates RESTful API call, handling of edge cases, and corresponding test units. `,
  workDone: [
    "Design and implement web app in React.",
    "Test units for mock async API calls, and rendering edge cases using Jest/Enzyme",
    "Use media queries to make app mobile responsive"
  ],
  liveLink: "https://quiet-brushlands-15098.herokuapp.com/",
  githubLink: "https://github.com/serpient/google-books-api",
  coverPhoto: require("../assets/book-finder_1000.png"),
  mainImage: require("../assets/book-finder-main.png"),
  features: [
    {
      title: "Book Finder Usability",
      description: `App has error handling and edge cases.`,
      image: require("../assets/book-finder.gif")
    }
  ]
};

export default Book_Finder;
