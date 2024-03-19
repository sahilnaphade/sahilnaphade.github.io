module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sahilnaphade.github.io/`,
    // Your Name
    name: 'Sahil Naphade',
    // Main Site Title
    title: `Sahil Naphade | Storage, Cloud, ML`,
    // Description that goes under your name in main bio
    description: `Hi there! I am Sahil, MS CS student at UW Madion, Exp. Grad. Fall 2025`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/sahilnaphade`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sahilnaphade/`,
    // Content of the About Me section
    about: `I am an experienced Storage software engineer with experience in Kubernetes, Docker, Cloud, Machine learning and AI.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'FlexPushdownDB',
        description:
          'Research project on a cloud-native OLAP database. Created a new join algorithm for databases using Local and remote memory using SmartNICs. Actual contributions are in a private branch.',
        link: 'https://github.com/cloud-olap/FlexPushdownDB',
      },
      {
        name: 'I/O Optimized External sort algorithm',
        description:
          'An I/O optimized external sort algorithm to sort >120GiB of data in a 100MiB memory environment, emulated SSD and HDD for the performance and created advanced data structures like Tournament Tree of Losers',
        link: 'https://github.com/divy9881/External-Sorting-for-Databases',
      },
      // {
      //   name: 'Another Cool Project',
      //   description:
      //     'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Robin.io',
        description: 'Software Engineer - Storage engineering',
        link: 'https://www.robin.io/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C, C++, Python, Golang (Go), Django, Flask',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, MongoDB, Redis',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Amazon Web Services (AWS), Microservices, REST API development,  CI / CD, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
