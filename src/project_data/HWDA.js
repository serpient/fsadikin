const HWDA = {
  name: 'Health Worker Data Alliance',
  date: 'April - June 2020',
  tech: [
    'React',
    'JavaScript',
    'React Testing Library',
    'Jest',
    'AWS',
    'Node',
    'Python'
  ],
  description: `Custom mobile-responsive React survey with AWS backend for the COVID-19 initiative Health Worker Data Alliance (HWDA). 
  HWDA is a collection of volunteers trying to help hospitals monitor physical health, mental health, and safety of frontline health workers. Data on their mental and physical health is limited, and  fragmented. To help, HWDA aggregates and visualizes health worker experiences across institutions to drive policy change. 
  `,
  workDone: [
    'Act as Lead Developer to build a custom survey web app in React and JavaScript with international language support.',
    'Architecting and implementing a data pipeline utilizing AWS (Firehose, Lambdas, Glue and Athena) services to transform and prepare survey results for data visualizations in Tableau.',
    'Presented the project & initiative at the digital tech conference GoodTechFest.'
  ],
  githubLink: undefined,
  blogLink: 'https://www.goodtechfest.com/agenda/session/258257',
  liveLink: 'https://survey.healthworkerdata.org/',
  coverPhoto: require('../assets/HWDA.png'),
  mainImage: require('../assets/hwda-cover.png'),
  verticalMainImage: false,
  features: [
    {
      title: 'Custom Form Components',
      description: `The application has numerous custom form inputs like the Checkbox with Sliders shown below, which allows users to not just answer how they feel but also the degree it is felt.`,
      image: { link: require('../assets/hwda-custom-form.gif') }
    },
    {
      title: 'Mobile Responsive Design',
      description: `The client's previous form in SurveyMonkey had a poor mobile experience. The new custom application is mobile-responsive, making it easy for our users to repeatedly fill out the form in desktop & mobile devices.`,
      image: { link: require('../assets/hwda-mobile-first.gif') }
    },
    {
      title: 'Better User Experience for Repeat Users',
      description: `To increase repeat users of the application, the form checks against the user's inputted phone number and determines whether they are a repeat user. If so, users can skip the standard profile questions and go straight to the necessary questions.`,
      image: { link: require('../assets/hwda-form.gif') }
    },
    {
      title: 'AWS Data Pipeline',
      description: `When building the data pipeline for the project, we prioritized team tooling familiarity, ease of use for the data visualizers, and cost. The data visualizations are generated in Tableau, so we used AWS Athena to anchor the pipeline due to its easy data push to Tableau. From there, we built out the rest of the pipeline, keeping in mind our clients low budget. `,
      image: {
        link: require('../assets/hwda-data.png'),
        vertical: false
      }
    },
    {
      title: 'Conference Talk - App Overview',
      video: 'https://www.youtube.com/embed/kN1FEogOjbs?start=1332'
    }
  ]
};

export default HWDA;
