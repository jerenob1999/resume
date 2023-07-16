"use client";
import React from "react";

interface AboutMe {
  title: String;
  body: String;
}

interface Skill {
  icon: string;
  text: string;
}
interface Skills {
  title: String[];
  soft: Skill[];
  hard: Skill[];
}
function About({ skills, aboutMe }: { aboutMe: AboutMe; skills: Skills }) {
  const { title, body } = aboutMe;
  const { soft, hard, title: skillTitle } = skills;
  return (
    <div>
      <section className="flex flex-col justify-center mt-2">
        <h3>{title}</h3>
        <p>{body}</p>
      </section>
      <h3>{skillTitle[0]}</h3>
      <div className="flex justify-evenly">
    <div>
      <h4>{skillTitle[1]}</h4>
      <ul className="flex flex-col list-disc">
        {soft.map(({ text, icon }) => {
          return (
            <li className="p-2" key={text}>
              {text} {icon}
            </li>
          );
        })}
      </ul>
    </div>
    <div>
        <h4>{skillTitle[2]}</h4>
      <ul className="flex flex-col list-disc">
        {hard.map(({ text, icon }) => {
          return (
            <li className="p-2" key={text}>
              {text} {icon}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
      </div>
  );
}

export default About;
