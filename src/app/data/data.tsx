import { Hotmail, Github, Linkedin, Discord } from "../components/icons";

export const skills = {
	soft: [
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "⽓", text: "Teamwork" },
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "⌛️", text: "Time management" },
	],
	hard: [
		{ icon: "💻", text: "Python" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "🚀", text: "React" },
		{ icon: "💾", text: "SQL" },
		{ icon: "💾", text: "noSQL" },
		{ icon: "📈", text: "Data Structures and Algorithms" },
	],
};

export const stack = ["Typescript", "React", "Mongo", "Next.js"];

export const aboutMe = {};

export const info = {
  name: "Jeremias Apiani",
  role: "Fullstack developer",
  education: ["Bachelor's degree in Economics UNR (2020-current)","SoyHenry fullstack Bootcamp (2022-2023)"],
  contactt: [
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
