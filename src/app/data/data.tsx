import { Hotmail, Github, Linkedin, Discord } from "../components/icons";

export const skills = {
  title: ["Skills","Soft","Hard"],
	soft: [
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "⽓", text: "Teamwork" },
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "⌛️", text: "Time management" },
	],
	hard: [
		{ icon: "💻", text: "React" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "🚀", text: "Mongo" },
		{ icon: "💾", text: "Next.js" }
	],
};

export const aboutMe = {
  title: "About me",
  body: "My name is Jeremias and I am a full-stack developer from Rosario, Argentina. All my life, I have been passionate about computers in general, and it wasn't until a year ago that I embarked on the world of programming."
};

export const proyects = [
  {
    title:"Ecommerce app",
    description:"ReStore is a Ecommerce app made with SCRUM ",
    role:"",
    link:"",
    technologys:"",
  },
  {
    title:"",
    description:"",
    role:"",
    link:"",
    technologys:"",
  },
]


export const info = {
  name: "Jeremias Apiani",
  role: "Fullstack developer",
  education: ["-Bachelor's degree in Economics UNR (2020-current)","-SoyHenry fullstack Bootcamp (2022-2023)"],
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
      link: "Jere#9557",
      icon: <Discord />,
    },
  ],
};

export const experience = [
  {
    title:"Experience",
    body:["Developed a full working ecommerce with payments methods, authentication system and admin panel experience","made a videogame aplication with full crud"]
  },
  {
    title:"Non tech experience",
    body:["6 months working at a restaurant","2 years of customer service in a family business"]
  }
]

