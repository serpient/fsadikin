const Connect_4 = {
  name: 'Connect 4',
  date: 'Jan. 2019',
  tech: ['React', 'Jest', 'Enzyme', 'JavaScript'],
  description: `Connect 4 game with 2 local players. Match 4 coins horizontally, vertically, or diagonally to win.`,
  workDone: [
    'Implement game play using a 2D array data structure, built in React.',
    'Created a win algorithm that checks for horizontal, vertical and diagonal wins',
    'Test units for horizontal, vertical and diagonal wins using Jest/Enzyme.'
  ],
  liveLink: 'https://serpient.github.io/connect-4/',
  githubLink: 'https://github.com/serpient/connect-4',
  blogLink:
    'https://medium.com/@fsadikin/lessons-learned-in-making-connect-4-41c0b86df360',
  coverPhoto: require('../assets/connect-4_1000.png'),
  mainImage: require('../assets/connect-4-main.png'),
  features: [
    {
      title: 'Connect 4 Gameplay',
      image: { link: require('../assets/connect-4-short.gif'), vertical: false }
    }
  ]
};

export default Connect_4;
