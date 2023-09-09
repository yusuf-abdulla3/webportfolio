import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Abdulla | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Yusuf Abdulla | Full Stack Developer ',
  name: 'Welcome To My Portfolio!',
  cta: 'More About Me',
  img: 'profile.jpg',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi! I'm a Full Stack Developer with a passion for building creative and effective applications.",
  paragraphTwo:
    "I'm knowledgeable in creating and designing user interfaces, debugging and testing codes, building and writing databases, and developing and maintaining applications. I have experience building full stack features, creating and integrating REST Apis, and bringing to life responsive and well-designed UIs. ",
  paragraphThree:
    'I enjoy solving problems and using my creativity to bring ideas to life that users might find useful!',
  resume: 'https://resume.creddle.io/resume/hotd8oqyo94',
};

// EXPERIENCE DATA

export const experienceData = [
  {
    id: nanoid(),
    companyName: 'BBE Expediting Ltd',
    img: 'bbe_logo.png',
    occupation: 'Full Stack Software Developer',
    startDate: 'Apr. 2022',
    endDate: 'Aug. 2023',
    paragraphOne:
      "Actively maintained and contributed to an internal shipping tool which manages 60% of the company's daily shipping requirements",
    paragraphTwo:
      'Implemented and maintained real-time carrier API integrations for up-to-date shipping rates, resulting in a 50-75% reduction in rate management time and significantly improving accuracy and scalability',
    paragraphThree:
      'Provided technical support and troubleshooting assistance to resolve internal and external user issues',
    paragraphFour:
      'Demonstrated excellent written and verbal communication skills to effectively convey technical concepts to both technical and non-technical stakeholders',
    techStack:
      'Tech Stack: Python, Django, Azure, Redis, Celery, jQuery, SCSS, Bootstrap, MySQL, Postman, Celery, Figma, Asana',
  },

  {
    id: nanoid(),
    companyName: 'Helping Hands',
    occupation: 'Full Stack Developer',
    startDate: 'Dec. 2021',
    endDate: 'Mar. 2022',
    img: 'helpinghands.jpg',
    paragraphOne:
      'Maintained and enhanced functionality of a web application that connects youth with volunteer opportunities in the Greater Toronto Area',
    paragraphTwo:
      'Contributed to front-end development using React, integrating new features and optimizing efficiency through refactoring and best practices',
    paragraphThree:
      "Managed and maintained the organization's AWS-hosted website, ensuring a seamless online presence",
    paragraphFour:
      "Managed and maintained the organization's AWS-hosted website, ensuring a seamless online presence",
    techStack:
      'Tech Stack: React, Ruby on Rails, Bootstrap, Styled Components, AWS, Heroku, Mixpanel, Airtable ',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'netflix-clone-img.png',
    title: 'Netflix Clone',
    info: 'A netflix clone that users can interact with to view movie trailers of popular TV Shows/Movies',
    info2: 'Tech Stack: React, Firebase, CSS, TMDB API',
    url: 'https://github.com/yusuf-abdulla3/netflix-clone',
    deployedUrl: 'https://netflix-clone-38dd4.web.app/',
  },
  {
    id: nanoid(),
    img: 'spotify-profile-app.jpg',
    title: 'Spotify Profile',
    info: "Profile that shows users' top artists/songs over a select period of time. You can also sort tracks from your favourite playlists by categories such as: Tempo, Dancability and Energy!",
    info2: 'Tech Stack: Node.js, Express, React, Spotify API, Styled Components',
    url: 'https://github.com/yusuf-abdulla3/spotify-profile-unwrapped',
    deployedUrl: 'http://spotify-profile-unwrapped.onrender.com',
  },
  {
    id: nanoid(),
    img: 'ciao.jpg',
    title: 'Ciao',
    info: 'App that allows users to create virtual greeting cards containing text, images, gifs and videos that they can build with others and send to a recipient.',
    info2: 'Tech Stack: PostgreSQL, Express, React.js, Node.js, Bootstrap, Giphy API, Unsplash API',
    url: 'https://github.com/yusuf-abdulla3/Ciao',
  },
  {
    id: nanoid(),
    img: 'scheduler.png',
    title: 'Interview Scheduler',
    info: 'App that allows users to book, edit, and delete interviews with select interviewers based on their weekly availability.',
    info2: 'Tech Stack: PostgreSQL, Express, React.js, Node.js',
    url: 'https://github.com/yusuf-abdulla3/scheduler',
  },
  {
    id: nanoid(),
    img: 'jungle.png',
    title: 'Jungle',
    info: 'E-commerce web application that allows customers to purchase items using their credit card via stripe and allows store owners to update products based on their inventory.',
    info2: 'Tech Stack: Ruby on Rails, PostGreSQL, Stripe API, Bcrypt, RSpec, Capybara',
    url: 'https://github.com/yusuf-abdulla3/jungle-rails',
  },
  {
    id: nanoid(),
    img: 'cafe.jpg',
    title: 'Cafe Order-Pickup App',
    info: 'Order-pickup app that allows customers to order any item on the menu. Allows the restaurant to inform customers of how long the order will take via SMS.',
    info2: 'PostgreSQL, Express, Node.js, Bootstrap, Twilio API',
    url: 'https://github.com/xazzer81/UberDrink',
  },
  {
    id: nanoid(),
    img: 'tweeter.jpg',
    title: 'Tweeter',
    info: 'Simple, single-page Twitter clone that provides a responsive design. Just like Twitter, the user cannot go over the 140 character limit.',
    info2: 'Tech Stack: Node.js, Express.js, jQuery, Bootstrap, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/tweeter',
    deployedUrl: 'https://tweeter-app.onrender.com/',
  },
  {
    id: nanoid(),
    img: 'tinyapp.png',
    title: 'Tiny App',
    info: 'TinyApp is an app that allows users to shorten long URLs (kind of like bit.ly). Logged in users can now access all of their favourite saved shortened urls in one place!',
    info2: 'Tech Stack: Node.js, Express, Bootstrap, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/tinyapp',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'y.abdulla37@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yusuf-abdulla/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yusuf-abdulla3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
