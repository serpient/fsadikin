const TicTacToe = {
  name: "Tic Tac Toe",
  date: "May 2019",
  tech: ["Ruby", "RSpec"],
  description: `Command Line Tic-Tac-Toe with a smart computer opponent, Lite-3 game mode, and ability to save-restart games.`,
  workDone: [
    "Implement Tic Tac Toe with Test-Driven-Development and SOLID clean code principles",
    "Utilized algorithms to create a smart computer opponent for players",
    "Add a persistence layer with PostgresDB",
  ],
  githubLink: "https://www.github.com/serpient/ruby_tic_tac_toe",
  blogLink: "https://www.notion.so/Adding-Lite-3-Mode-to-Tic-Tac-Toe-319cdbe091e84328a77dfe5cfe154f16",
  coverPhoto: require("../assets/tic-tac-toe.png"),
  mainImage: require("../assets/tic-tac-toe.png"),
  features: [
    {
      title: "Smart Computer Opponent",
      description: `Players have the ability to play against a smart computer, which calculates an optimal move to challenge the player.`,
      image: require("../assets/ruby_tic_tac_toe_smart_computer.gif")
    },
    {
      title: "Lite 3 Game Mode",
      description: `Lite 3 Game Mode: When a player has four of the squares selected on the board, the first square that the player selected becomes neutral again. `,
      image: require("../assets/ruby_tic_tac_toe_lite_3.gif")
    },
    {
      title: "Save / Restore Game",
      description: `Utilize Postgres for persistence and serializing to maintain game data integrity.`,
      image: require("../assets/ruby_tic_tac_toe_persistence.gif")
    },
    
  ]
};

export default TicTacToe;
