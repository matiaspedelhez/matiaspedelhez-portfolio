export default [
  {
    id: "tenzies-game",
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
    name: { en: "My Portfolio", es: "Mi Portafolio" },
    imageUrl: require("/public/assets/projects_images/portfolio_preview.png"),
    shortDesc: {
      en: "The page you are visiting right now.",
      es: "La página que estás visitando actualmente.",
    },
    longDesc: {
      en: "With the idea of learning Next.JS, I started this project. It took me longer than I expected, but in the end, I think it was worth the time.",
      es: "Con la idea de aprender Next.JS, empecé este proyecto. Me tomó un poco más de lo que imaginé, pero al final, creo que valió la pena.",
    },
    deploy: "",
    tools: ["react", "javascript", "figma", "sass", "next"],
    repository: "https://github.com/matiaspedelhez/matiaspedelhez-portfolio",
  },
];
