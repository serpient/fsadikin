const InclusiveMaps = {
  name: 'Inclusive Maps',
  date: 'April 2019',
  tech: ['React', 'GraphQL', 'JavaScript'],
  description: `Built for a 48-hour F8 Hackaton, Inclusive Maps is a responsive web application that uses crowd sourced information to help members 
  of the LGBT community feel more safe and comfortable, and for their allies to make better decisions on where to take their business. `,
  workDone: [
    'Design and implement web app in React / SCSS',
    'Use media queries to make app mobile responsive'
  ],
  liveLink: 'http://healthar-frontend.herokuapp.com',
  githubLink: 'https://github.com/healthar/health-ar-web',
  blogLink: 'https://devpost.com/software/inclusive-maps',
  coverPhoto: require('../assets/inclusive-maps.png'),
  mainImage: require('../assets/inclusive-maps-1.png'),
  features: [
    {
      title: 'Highlights Inclusive Locations',
      description: `Highlights inclusive healthcare providers, schools, and bathrooms that serve Transgender or gender-non conforming people. 
      The community can participate in this project by adding reviews for any location thats available on Google Maps.`,
      image: {
        link: require('../assets/inclusive-maps-main.png'),
        vertical: false
      }
    },
    {
      title: 'Wholistic View',
      description: `The general map view shows the inclusive or un-inclusive nature of a neighborhood or city by highlighting positive and negative experiences.`,
      image: {
        link: require('../assets/inclusive-maps-4.png'),
        vertical: true,
        size: 'small'
      }
    },
    {
      title: 'Easy Quick Reference',
      description: `By being mobile-responsive, users can easily reference the site from anywhere.`,
      image: {
        link: require('../assets/inclusive-maps-3.png'),
        vertical: true,
        size: 'small'
      }
    }
  ]
};

export default InclusiveMaps;
