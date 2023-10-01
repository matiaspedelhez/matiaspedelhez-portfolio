export default [
  {
    id: "msfs_mouse_yoke",
    number: 0,
    name: { en: "Mouse Yoke MOD", es: "Mouse Yoke MOD" },
    imageUrl: require("/public/assets/projects_images/mouse_yoke.webp"),
    shortDesc: {
      en: "Fly with your mouse in Microsoft Flight Simulator",
      es: "Vuela con tu mouse en Microsoft Flight Simulator",
    },
    longDesc: {
      en: "Use your mouse to control an airplane's yoke without the need of expensive equipment. It has already helped over 2k users, including individuals with disabilities, in enjoying Flight Simulator 2022. It insures a configurable way to emulate controller outputs by listening to the mouse position.",
      es: "Utiliza tu ratón para controlar los aviones sin necesidad de gastar mucho dinero. Con más de 2k usuarios incluyendo a personas con discapacidades. Asegura una forma configurable de emular un controlador, escuchando la posición del mouse continuamente.",
    },
    deploy: "https://flightsim.to/file/43284/mouseyoke-for-msfs-fly-using-your-mouse-in-microsoft-flight-simulator-2020",
    tools: ["python"],
    repository: "https://github.com/matiaspedelhez/msfs_mouse_yoke",
  },
  {
    id: "shopify-ecommerce",
    number: 1,
    name: { en: "Shopify Shop", es: "Tienda Shopify" },
    imageUrl: require("/public/assets/projects_images/shopify.png"),
    shortDesc: {
      en: "Front-end of a Shopify shop, using Shopify's Storefront API",
      es: "Front-end de una tienda de Shopify, utilizando la API 'Storefront', de Shopify",
    },
    longDesc: {
      en: "This is a front-end UI that uses the normal Shopify CMS, but its completely custom made. It offers some features like Server-Side Rendering, having the normal Shopify CMS for editing your products, and local storage for things like the client's cart. Unfortunately, it was not possible to deploy the proyect publicly.",
      es: "Esta es una interfaz de usuario personalizada que utiliza el CMS de Shopify, pero posee un diseño customizado. Ofrece algunas características tales como renderización del lado del servidor, la utilización del CMS estándar de Shopify para editar tus productos, y almacenamiento local para cosas como el carrito. Lamentablemente, no fue posible desplegar el proyecto de forma pública.",
    },
    // deploy: "https://tenzies-game-delta.vercel.app/",
    tools: ["react", "next", "css", "figma", "typescript", "shopify", "tailwind"],
    repository: "https://github.com/matiaspedelhez/shopify-ecommerce",
  },
  {
    id: "tenzies-game",
    number: 2,
    name: { en: "Tenzies Game", es: "Juego Tenzies" },
    imageUrl: require("/public/assets/projects_images/tenzies_preview.png"),
    shortDesc: {
      en: "A simple game made as an introduction to ReactJS.",
      es: "Juego simple hecho como introducción a ReactJS.",
    },
    longDesc: {
      en: "This was the first project I made in React. It is a simple game where you have to match all dies so they have the same value. By clicking them, you lock their value.",
      es: "Este es el primer proyecto que realicé en React. Es un juego simple, en el que tienes que igualar todos los números hasta que tengan el mismo valor. Apretando sobre ellos, su valor se bloquea.",
    },
    deploy: "https://tenzies-game-delta.vercel.app/",
    tools: ["react", "javascript", "sass", "figma"],
    repository: "https://github.com/matiaspedelhez/tenzies-game",
  },
  {
    id: "coffee-website",
    number: 3,
    name: { en: "Coffee Website", es: "Página web de café" },
    imageUrl: require("/public/assets/projects_images/coffee_preview.png"),
    shortDesc: {
      en: "An static page built in React.",
      es: "Página web estática construida en React.",
    },
    longDesc: {
      en: "This was a weekend project, made for practicing responsivness. The design was made by Illia Frunza, a Figma community designer.",
      es: "Este fue un projecto de fin de semana, hecho para practicar diseños responsivos. El diseño fue hecho por Illia Frunza, un diseñador comunitario de Figma.",
    },
    deploy: "https://react-coffee-webpage.vercel.app/",
    tools: ["react", "javascript", "figma", "sass"],
    repository: "https://github.com/matiaspedelhez/react-coffee-webpage",
  },
  {
    id: "portfolio",
    number: 4,
    name: { en: "My Portfolio", es: "Mi Portafolio" },
    imageUrl: require("/public/assets/projects_images/portfolio_preview.png"),
    shortDesc: {
      en: "The page you are visiting right now.",
      es: "La página que estás visitando actualmente.",
    },
    longDesc: {
      en: "Made primarely for learning Next.js, but it turned as a real project. By using Next's i18n (Internationalization), it can be displayed on english and spanish.",
      es: "Creado principalmente para aprender Next.js, pero se convirtio en un proyecto real. Utilizando i18n de Next (Internacionalización) permite la presentación de multiples idiomas.",
    },
    deploy: "",
    tools: ["react", "javascript", "figma", "sass", "next"],
    repository: "https://github.com/matiaspedelhez/matiaspedelhez-portfolio",
  },
];
