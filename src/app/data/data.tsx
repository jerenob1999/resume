import { Hotmail, Github, Linkedin, Discord } from "../components/icons";

export const skills = {
  title: ["Skills", "Soft", "Hard"],
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "🎯", text: "Dedication" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "💪", text: "Positive attitude" },
  ],
  hard: [
    { icon: "⚛️", text: "React" },
    { icon: "🔷", text: "TypeScript" },
    { icon: "🍃", text: "Mongo" },
    { icon: "🔮", text: "Next.js" },
    { icon: "🚀", text: "Node.js" },
    { icon: "🔌", text: "Express" },
  ],
};

export const aboutMe = {
  title: "About me",
  body: "My name is Jeremias, and I am a full-stack developer from Rosario, Argentina. Throughout my life, I have had a deep passion for computers, and it was only a year ago that I ventured into the world of programming. I consider myself a highly curious individual with a strong desire to continuously expand my knowledge. I thrive on challenging tasks and enjoy pushing myself to new limits.\nI am constantly seeking opportunities to learn and grow, embracing new technologies and approaches. Solving problems creatively and finding innovative solutions is something I truly enjoy. I am committed to honing my skills as a developer and making meaningful contributions to exciting projects.I am excited about the possibilities that lie ahead and look forward to further advancing my career in the ever-evolving field of software development."
};

export const info = {
  name: "Jeremias Apiani",
  role: "Fullstack developer",
  education: [
    "-Bachelor's degree in Economics UNR (2020-current)",
    "-SoyHenry fullstack Bootcamp (2022-2023)",
  ],
  contact: [
    {
      link: "mailto:jeremias_apiani@hotmail.com",
      icon: <Hotmail></Hotmail>,
    },
    {
      link: "https://www.linkedin.com/in/jeremias-apiani/",
      icon: <Linkedin />,
    },
    {
      link: "https://github.com/jerenob1999",
      icon: <Github />,
    },
    {
      link: "https://discord.com/invite/Jere#9557",
      icon: <Discord />,
    },
  ],
};

export const experience = [
  {
    title: "Experience",
    body: [
      "- Developed a full working ecommerce with payments methods, authentication system and admin panel experience with Javascript,Next,Node, Express and MongoDb",
      "- Made a videogame aplication with full crud with  Javascript,React,Node, Express and PostgreSQL",
    ],
  },
  {
    title: "Non tech experience",
    body: [
      "- 6 months of work in a restaurant (2019-2020)",
      "- 2 years of customer service in a family business (2021-2023)",
    ],
  },
];

export const language = ["ENG", "ESP"];
