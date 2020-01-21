const Rebay = {
  name: 'Rebay',
  date: 'July 2019',
  tech: [
    'Elixir',
    'Phoenix',
    'React',
    'JavaScript',
    'React Testing Library',
    'Jest'
  ],
  description: `Auction site with React/JavaScript frontend and Phoenix/Elixir API, with Google Authentication.`,
  workDone: [
    'Design and implemented frontend with custom styles and React components.',
    'Design and implemented Phoenix API with PostgresDB/Ecto',
    'Autobidding feature'
  ],
  githubLink: 'https://github.com/rebay-8th-light-ebay-clone',
  blogLink:
    'https://www.notion.so/Rebay-Project-Takeaways-07774bd789e94c87bb94d22ec7b3a081',
  coverPhoto: require('../assets/rebay.png'),
  mainImage: require('../assets/rebay-item-auto-bid.png'),
  verticalMainImage: true,
  features: [
    {
      title: 'Auto Bidding',
      description: `Users are able to set an auto-bid to an item, which will bid automatically up to the specified maximum amount.`,
      video: require('../assets/rebay-auto-bid-feature.mp4')
    }
  ]
};

export default Rebay;
