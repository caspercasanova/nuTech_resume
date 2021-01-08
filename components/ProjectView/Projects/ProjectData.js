// name,
// date,
// purpose,
// objective,
// accomplishments,
// technologiesUsed,
// links,
// startingMaterials,
// summary,
// hurdles,

const ProjectData = [
  {
    name: 'Project X',
    date: '2020-15-10',
    purpose:
      'I wanted to further my expertise with back end technologies and diversify myself by exploring the capabilities of a graph database. I also wanted to utilize GraphQL for one project and figured a backend project like Project X would be perfect for it.',
    objective:
      'Find relationships between stock data and / or Seed a database to replicate Time Series Data',
    accomplishments: [
      'The Seeding Script is capable of replicating parties that will occur for the next week',
      'Social Media functionality. Add/Remove Friends. Block Users. Create Groups and Join Parties in a group',
      'Test Driven Development complete with seeding script',
    ],
    technologiesUsed: [
      'Node.js',
      'MongoDB',
      'React.js',
      'Jest',
      'Docker',
      'Three.Js',
    ],
    inspiration: [
      'https://medium.com/applied-data-science/exploring-stocks-in-the-london-stock-exchange-using-graph-networks-in-neo4j-part-1-58a5455084ab',
    ],
    startingMaterials: [
      'GRAND stack Starter app.',
      "O'Reilly Graph Databases Book",
    ],

    links: {
      github: 'https://github.com/caspercasanova/project_x',
      liveView: 'https://project-y-oihk8u6f3.vercel.app',
    },
    githubLink:
      'https://github.com/caspercasanova/project_x',
    schematics: [],
    websiteLink: 'https://project-y-oihk8u6f3.vercel.app',
    link: '/project-X',
    hurdles: [
      'Everything in the initial setup was difficult. I think the first steps are always the hardest especially with a new technology. Establishing a proper and maintable code structure for the database was most difficult as I was alone and had little refernce for best practices.',
      'The amount of new Technologies I needed to learn was large. Luckily I know JavaScript and NodeJs, but Neo4j has its own Query Language and before this I had only done tutorials on Apollo and GraphQl servers. Normally too many unfamiliar technologies at once can deter and hinder my learning process, I maintained consistency and bit by bit got closer to a goal.',
      'Generating connected data also became somewhat of a challenge as it required me to change my mental model of what I data points I required.',
    ],

    summary:
      'Graph Databases like Neo4j provide something NonSQL and SQL databases cant. I dont believe there is a silver bullet technology, I believe in more of a shotgun spread approach. I am sure every modern application could find a useful service for a graph database and Neo4j would be the proper choice. The Query Language is not super difficult to understand (Mastering is another thing entirely).',
  },
  {
    summary: [],
    name: 'Project Y',
    whatILearned: '',
    date: '2021',
    objective:
      'Build an ecommerce site that business and product revenues to customers in an attempt to provide more transparency and upfrontness. Provide Systematic Sales Events and Document Customer Interations.',
    purpose:
      'Clothing and Art has always been a passion of mine and if I ever launched a store of my own, I would want to build a site similiar to this.',
    hurdles: [
      'Everything. Honestly, initial Design is tough and there are no rules. I essentially took from the best places. I took concepts from Nike as I believe they have the greatest Ecommerce clothing store. They know that pictures are the mainstay for selling and provide TONS of them. A clothing business is more than just a website and more than just the clothes, it ultimately is a representation of a culture and the embodiedment of a community. Nike I believe present community the best.',
      'Steam is probably the most successful privatly held ecommerce platform in the world. Valve knows the gaming sector and is one of the greatest creators in the world. The Steam platform is an amazign piece of software and every online business should take reference of them. With Project-Y I wanted to replicate some kind of sales system but programmatically. I figured the best sales occur during Christmas and Black Friday, so if I could offer 30% off during the weeks leading to that every year, I would be one step ahead of most companies. Effort would be saved every year and as a 1 Man Shop, thats energy I could divert to another place.',
      'The Robinhood.com has an amazingly simplisitc aesthetic. I choose to use Robinhood as a refernce because I its simplicity was something that worked. Think about the number of dollars that people has put into the app. If the app were too complex, people wouldnt spend as much as they do. Like Picaso said, "Great Artists Steal."',
      'This was also an experience for me to learn Nextjs. Before this project, I had never touched it and to be honest, there are a bunch of little quirks, but I actually found myself picking it up pretty fast. Once I relized that the file structure was opinionated like Rails, most things became a breeze.',
      'The challenging aspect of this project was the amount of work required in term of styling and backend.',
    ],
    startingMaterials: [
      'I attempted a similiar project during the summer, so I had some previous html and css for some simple components like inputs. But other than that Everything was built from scratch. ',
      'Nike.com',
      'Robinhood.com',
      'Steam.com',
    ],
    accomplishments: [
      'SSR Ecommerce web application built with Next.js.',
      'Leverages cloud functions for Stripe payment processing.',
      'Heavy use of SVG charts to display product, brand and user analytics.',
      'MongoDB for storing merchandise, brand and user data.',
      'A seed file can be found here.',
      'Deployed through Vercel and invokes cloud / lambda functions.',
    ],
    technologiesUsed: [
      'Next.js',
      'Stripe',
      'Mongodb',
      'Vercel',
      'SASS',
    ],
    links: {
      github: 'https://github.com/caspercasanova/project-y',
      liveView: 'https://project-y-oihk8u6f3.vercel.app',
    },
    link: '/project-Y',
  },
  {
    name: 'Project Z',
    date: '2020-15-10',
    objective: '',
    whatILearned: '',
    purpose: '',
    hurdles: ['i have not tried yet'],
    accomplishments: [
      'Globe Three JS application Capable Of Rendering Points Based On Coordinates',
      'Deployed Utilizing Next.Js And Vercel',
      'Renders Alien Sighting Data, Capable Of Rendering Any Type of Geospatial Data.',
    ],
    startingMaterials: [],
    technologiesUsed: ['Next.js', 'Jest', 'Three.js'],

    schematics: [],
    summary: [],
    links: {
      liveView: 'https://project-z-nine.vercel.app/',
      githubLink: 'github.com',
    },
    link: '/project-Z',
  },
];

export default ProjectData;
