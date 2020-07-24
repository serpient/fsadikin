const Focal = {
  name: 'Focal',
  date: 'Sept. - Oct. 2019',
  tech: [
    'Elixir',
    'Phoenix',
    'React',
    'JavaScript',
    'React Testing Library',
    'Jest'
  ],
  description: `Focal is a workflow and client management tool for wedding photographers. 
  It aims to help photographers consolidate clients information (personal info, photography packages, shoot events, and private notes) and tie it to a set of workflow tasks.`,
  workDone: [
    'Design and implemented frontend with custom styles and React components.',
    'Design and implemented API with the Phoenix framework (Elixir, PostgresDB).',
    'Used Google OAuthentication as authentication layer.'
  ],
  githubLink: 'https://github.com/Focal-App',
  coverPhoto: require('../assets/focal.png'),
  mainImage: require('../assets/focal-client-page.png'),
  verticalMainImage: true,
  features: [
    {
      title: 'Consolidate all client data',
      description: `Users can keep track of each clients personal information, package and event details in one page. Including certain events will enable the related set of workflow tasks. `,
      video: require('../assets/update_package_and_create_event.mp4')
    },
    {
      title: 'Track workflow tasks',
      description: `Users can stay on top of their tasks from either an individual clients page, or the client overview page which gives a birds-eye view of all current tasks.`,
      video: require('../assets/toggling_todo_from_table.mp4')
    },
    {
      title: 'Technical Strategies: Small Data Models in API',
      description: `The API uses small data models (represented on the left side) which are then composed in the view layer (repersented on the right side) to what the frontend requires. 
      This strategy increases flexibility by decoupling how we organize the core resources and the requirements of the frontend. `,
      image: {
        link: require('../assets/focal-small-models.png'),
        vertical: false
      }
    },
    {
      title: 'Technical Strategies: Data Adapter',
      description: `The DataAdapter class acts as a boundary between the data received from the API and the data shape the rest of the frontend codebase relies on. 
      By wrapping incoming API data with our DataAdapters, any changes to the API data shape can be handled in one place as opposed to updating the changes throughout the codebase.`,
      image: [
        {
          link: require('../assets/focal-data-adapter-2.png'),
          vertical: false
        },
        { link: require('../assets/focal-data-adapter.png'), vertical: false }
      ]
    },
    {
      title: 'Technical Strategies: Levels of Tests',
      description: `The frontend has 3 levels of tests, with a focus on behavioral flow tests as opposed to tests that rely on implementation. 
      Behavioral Tests can mount the entire application, mock API calls and is used to simulate how a user flows between the pages and through the site. See below for a sample test written with React Testing Library.`,
      image: [
        {
          link: require('../assets/focal-levels-of-test.png'),
          vertical: false
        },
        { link: require('../assets/focal-sample-test.png'), vertical: true }
      ]
    }
  ]
};

export default Focal;
