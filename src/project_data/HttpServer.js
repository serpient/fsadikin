const HttpServer = {
  name: 'HTTP Server',
  date: 'June 2019',
  tech: ['Java', 'JUnit', 'Gradle'],
  description: `HTTP Server framework built from scratch in Java, following the HTTP protocol.`,
  workDone: [
    'Utilize threads so that the server can handle 5000+ concurrent calls.',
    'Add ability for server to handle GET, POST, DELETE, PUT, PATCH requests and manipulate asset directories.',
    'Architect the public facing interface with a focus on ease of use for other developers using this HTTP framework.',
    'Used TDD to drive out the code. Unit tests with JUnit, and Postman for end-to-end testing'
  ],
  githubLink: 'https://github.com/serpient/java_http_server',
  blogLink:
    'https://www.notion.so/HTTPServer-Intentions-e2bb0a7d79514fa8a19551178c15f52d',
  coverPhoto: require('../assets/http-server.png'),
  mainImage: require('../assets/http-server.png'),
  features: [
    {
      title: 'Easy usability',
      description: `The public facing interface is designed to be Express-like and easy to use for other engineers. `,
      image: {
        link: require('../assets/http_server_code.png'),
        vertical: true
      }
    }
  ]
};

export default HttpServer;
