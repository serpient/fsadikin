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
    'Lead Developer to build a custom survey web app in React and JavaScript with international language support.',
    'Led decision to replace SurveyMonkey with a custom web app in React+JavaScript by working with the client to understand their goals of improved survey experience, automated low-cost data ingestion for custom analytics, and ease of use for their non-technical administrators.',
    'Architected and implemented a $1/month AWS data pipeline with a 1-click process for the client’s data scientist to pull in survey data into Tableau with an emphasis on easy maintainability for non-technical administrators.',
    'Ensured on-schedule project completion by taking over critical data pivoting lambda necessary to prep data for Tableau after client’s data analysts could not complete the work, necessitating learning Python in 2 days to complete and integrate.',
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
