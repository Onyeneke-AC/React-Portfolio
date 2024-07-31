export const portfolioData = [
  {
    id: 1,
    title: "The Wild Oasis",
    subtitle: "Cabin Management System",
    stack: "React JS, Supabase, Styled-components (for styling)",
    description:
      "A double themed (light and dark) react web application that allows employees to manage their cabin reservations, check-ins and check-outs. It also tracks the sales made within different date intervals. Customers booking details are stored and can be deleted if required. Optional breakfast is also an added feature to this app. Different react libraries were made use of in the development of this web app. For instance: react-router was used in handling routing between the pages, react-hook-form was used for form management etc. React Query was used for handling remote state management and contextAPI was used in handling UI state management. A back-end was also implemented using supabase. Supabase is an open-source backend-as-a-service platform that provides developers with a suite of tools to build and scale their applications. At its core, Supabase utilizes PostgreSQL, a powerful and extensible relational database, offering full SQL capabilities and the ability to handle complex queries with ease. Queries such as filtering, sorting and pagination were handled using both custom made components in react and supabase. Images were stored in supabase and authentication was also handled using this service.",
    mainImg: "img/1-wild-oasis.JPG",
    subImg: "img/2-wild-oasis.JPG",
    demo: "https://the-wild-oasis-sand-two.vercel.app/",
    github: "https://github.com/Onyeneke-AC/the-wild-oasis",
  },
  {
    id: 2,
    title: "Property Pulse",
    subtitle: "Property Rentals",
    stack: "React JS, Tailwind CSS (for styling)",
    description:
      "A fullstack web application that displays different rental properties in the US. It also displays the different prices of these retail together with certain details about each properties. Properties can be bookmarked once the user is logged in. ContextAPI was used in handling global state management.Authentication and authorization was done using next-auth where google was the provider used. Nextjs is a full stack framework, for front end it implements react code and turns it into magic with server side rendering, incremental static regeneration etc. It also boosts the seo performance. For routing nextjs uses filesystem as routes, and for backend, nextjs uses nodejs in app/api directory and subdirectories. Other than that nextjs has some components that optimizes the end product, like next/image or next/script. MongoDB was the database used in this project and it was connected to this project using mongoose. Cloudinary was used to store images. Geographical mapping was an added feature and this was implemented using mapbox. React libraries such as react-share, react-photoswipe-gallery etc. were also used in implementing added features to this project.",
    mainImg: "img/1-property-pulse.JPG",
    subImg: "img/2-property-pulse.JPG",
    demo: "https://property-pulse-flax.vercel.app/",
    github: "https://github.com/Onyeneke-AC/property-pulse",
  },
  {
    id: 3,
    title: "Fast React Pizza Co.",
    subtitle: "Pizza Ordering System",
    stack: "React JS, Tailwind CSS (for styling)",
    description:
      "A simple react web application used for ordering pizza. A pizza-order api deployed on render was used to get the pizzas available on the menu, create and update an order and then save the orders. The data fetching capabilities of react-router-dom was explored and this was used to fetch and post data for the entirety of this project. Tailwind CSS was used for the styling of this project. Redux was used for state management where slices were created for two different features of the app: the cart and the user. The project was deployed on vercel.",
    mainImg: "img/1-fast-react-pizza.JPG",
    subImg: "img/2-fast-react-pizza.JPG",
    demo: "https://fast-react-pizza-eight-gilt.vercel.app/",
    github: "https://github.com/Onyeneke-AC/fast-react-pizza",
  },
  {
    id: 4,
    title: "Tenece Website Clone",
    subtitle: "Landing page clone",
    stack: "React JS, CSS (for styling)",
    description:
      "My first web application. It is a react web application cloning the website landing page of an IT company. Although I work there as a technical presales engineer, I really wanted to explore the web space hence I picked up react during my leisure time. react-router-dom was used in routing and libraries such as swiper was used in implementing added features such as swiping components and infinite scrolls . This project introduced me to the world of react and I used this to pick up concepts such as hooks, state management, routing, component reusability and lots more. The project was also deployed on vercel.",
    mainImg: "img/1-tenece.JPG",
    subImg: "img/2-tenece.JPG",
    demo: "https://tenece-landing-page-react.vercel.app/",
    github: "https://github.com/Onyeneke-AC/Tenece_Landing_Page_React",
  },
  {
    id: 5,
    title: "Adopt Me",
    subtitle: "Adopt a pet today!",
    stack: "React JS, CSS (for styling)",
    description:
      "A web application that retrieves details about different pets up for adoption. A simple react project that dives deep into core concepts of react such as UI and remote state management using contextAPI and react query respectively, routing using react-router-dom, component reusabilility and lots more. Queries were implemented using the results filled on a form. The form requests for location, animal and breed and these are used to filter out different pets. The aweb application was also deployed on vercel.",
    mainImg: "img/1-adopt-me.JPG",
    subImg: "img/2-adopt-me.JPG",
    demo: "https://adopt-me-ecru-five.vercel.app/",
    github: "https://github.com/Onyeneke-AC/Adopt-me",
  },
  {
    id: 6,
    title: "Real-time Weather App",
    subtitle: "What's the weather like in ...",
    stack: "TypeScript, React, Styled-components (for styling)",
    description:
      "A simple react weather web application built using typescript. It shows real-time data about the searched city current weather situation. It can also locate your current location and give details about the current weather situation wherever you are. The temperature and humidity values are also displayed in this app. React query (using axios) was used to fetch data and manage remote state. Styled-components was used to give the project a simple styling. The project is deployed on vercel.",
    mainImg: "img/1-weather.JPG",
    subImg: "img/2-weather.JPG",
    demo: "https://weather-app-mauve-beta.vercel.app/",
    github: "https://github.com/Onyeneke-AC/weather-app",
  },
];
