import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Abdulla | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is Yusuf Abdulla!  ',
  name: "I'm a Full Stack Developer.",
  cta: 'More About Me',
  img: 'profile.jpg',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi! I'm a Full Stack Web Developer with a background in Retail Marketing and Sales and a passion for building creative and effective applications.",
  paragraphTwo:
    "I'm knowledgeable in creating and designing user interfaces, debugging and testing codes, building and writing databases, and developing and maintaining applications.",
  paragraphThree:
    'I enjoy solving problems and using my creativity to bring ideas to life that users might find useful!',
  resume: 'https://resume.creddle.io/resume/hotd8oqyo94', // if no resume, the button will not show up
};

// EXPERIENCE DATA

// • Helping Hands is a non-profit organization and interdisciplinary youth-based platform that promotes and aids youth in community projects, volunteering, and engagement.
// • Oversee the backend, deployment, databases, SendGrid integration, using ActiveStorage with S3 of a Ruby on Rails & React app.
// • Writings of internal technical documentation for training purposes.
export const experienceData = [
  {
    id: nanoid(),
    companyName: 'BBE Expediting Ltd',
    img: 'bbe_logo.png',
    occupation: 'Junior Software Developer',
    startDate: 'Apr. 2022',
    endDate: 'Present',
    paragraphOne:
      'Participating in the full development cycle, end-to-end, from design, implementation, & testing to documentation, delivery & maintenance',
    paragraphTwo:
      'Assisting lead developer in enhancing and refactoring services to adhere to DRY, YAGNI, and KISS principles to improve performance, constant up-time, and maintainability',
    paragraphThree:
      'Developing and testing RESTful APIs using Python, Django REST Framework, Redis, Celery and Postman',
    paragraphFour:
      'Tech Stack: Python, Django, Javascript, jQuery, SCSS, Bootstrap, MySQL, Celery, Redis, Travis CI, Postman',
  },

  {
    id: nanoid(),
    companyName: 'Helping Hands',
    occupation: 'Junior Software Developer',
    startDate: 'Dec. 2021',
    endDate: 'Mar. 2022',
    img: 'helpinghands.jpg',
    paragraphOne:
      'Developed key features on a full stack application and debugged issues that arised. Focused on working with React on the front-end. Deployed the beta via Heroku and conducted user testing for further feedback',
    paragraphTwo:
      "Designed new pages for the website alongside a UX designer and connected Google Analytics and Mixpanel in order to gain user data to improve the website's performance.",
    paragraphThree:
      'Updated internal technical documentations for training purposes for future developers that join the team',
    paragraphFour:
      'Tech Stack: React, Ruby on Rails, Bootstrap, Styled Components, AWS, Heroku, HTML, CSS, Google Analytics, Mixpanel, Airtable ',
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
    info: 'Provides users with a profile that shows their top artists/tracks for the last month, 6 months and all time. It also allows users to access their playlists and sort tracks by categories such as: Tempo, Dancability and Energy.',
    info2: 'Tech Stack: Node.js, Express, React, Spotify API, Styled Components',
    url: 'https://github.com/yusuf-abdulla3/spotify-profile-unwrapped',
    deployedUrl: 'http://spotify-profile-unwrapped.herokuapp.com',
  },
  {
    id: nanoid(),
    img: 'ciao.jpg',
    title: 'Ciao',
    info: 'Collaborated with a team to develop a full stack application that allows its users to create virtual greetings containing text, images, gifs and videos that they can build with others and send to a recipient.',
    info2:
      'Tech Stack: PostgreSQL, Express, React.js, Node.js, Bootstrap, Giphy API, Unsplash API, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/Ciao',
    deployedUrl: 'https://github.com/yusuf-abdulla3/Ciao',
  },
  {
    id: nanoid(),
    img: 'scheduler.png',
    title: 'Interview Scheduler',
    info: 'An full stack app that allows users to book, edit, and delete interviewers with select interviewers based on their weekly availability.',
    info2: 'Tech Stack: PostgreSQL, Express, React.js, Node.js, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/scheduler',
    deployedUrl: 'https://github.com/yusuf-abdulla3/scheduler',
  },
  {
    id: nanoid(),
    img: 'jungle.png',
    title: 'Jungle',
    info: 'Jungle is an e-commerce web application built using Ruby on Rails which allows customers to purchase items using their credit card via stripe. It also allows store owners to update products based on their inventory.',
    info2: 'Tech Stack: Ruby on Rails, PostGreSQL, Stripe API, Bcrypt, RSpec, Capybara, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/jungle-rails',
    deployedUrl: 'https://github.com/yusuf-abdulla3/jungle-rails',
  },
  {
    id: nanoid(),
    img: 'cafe.jpg',
    title: 'Cafe Order-Pickup App',
    info: 'Collborated with a team to develop a restaurant order-pickup app in which the the customer can order any item on the menu. The order is then sent to the cafe via SMS using Twilio API. The restaurant inputs the amount of time it will take for the order to be completed which is then communicated to the customer via SMS using Twilio API.',
    info2: 'PostgreSQL, Express, Node.js, Bootstrap, Twilio API, HTML, CSS',
    url: 'https://github.com/xazzer81/UberDrink',
    deployedUrl: 'https://github.com/xazzer81/UberDrink',
  },
  {
    id: nanoid(),
    img: 'tweeter.png',
    title: 'Tweeter',
    info: 'Tweeter is a simple, single-page Twitter clone that provides a responsive design. Whether you are using a small device or a device with a larger screen, tweeter provides a responsive design that can adapt! Just like Twitter, the user cannot go over the 140 character limit. The tweet is then posted in real time.',
    info2: 'Tech Stack: Node.js, Express.js, jQuery, Bootstrap, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/tweeter',
    deployedUrl: 'https://github.com/yusuf-abdulla3/tweeter',
  },
  {
    id: nanoid(),
    img: 'tinyapp.png',
    title: 'Tiny App',
    info: 'TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (kind of like bit.ly).',
    info2: 'Tech Stack: Node.js, Express, Bootstrap, HTML, CSS',
    url: 'https://github.com/yusuf-abdulla3/tinyapp',
    deployedUrl: 'https://github.com/yusuf-abdulla3/tinyapp',
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
      name: 'codepen',
      url: 'https://codepen.io/yusuf-abdulla',
    },
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
