import React from "react";
import Image from "next/image";
import profile from "../../../public/Profile.jpg";

interface Info {
  name: string;
  role: string;
  education: string[];
  contact: Contact[];
}

interface Contact {
  link: string;
  icon: JSX.Element;
}

function Sidebar({ info }: {info:Info}) {
  const {name,role,education,contact} = info
  return (
    <div className='bg-gray-500 text-white  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/4 sm:fixed '>
        <div className="flex flex-col items-center h-full  justify-center">
      <Image
        className="rounded-full h-40 w-40 overflow-hidden "
        src={profile}
        alt="Profile picture"
      />
      <h1 className="p-3">{name}</h1>
      <h2 className="p-3">{role}</h2>
      <p className="flex justify-start w-full ml-5">{education[0]}</p>
      <p className="flex justify-start w-full ml-5">{education[1]}</p>
      <h3 className="mt-3">Contact me</h3>
      <div className="flex flex-row">
        {contact.map((contacto: Contact) => (
          <a
            className="p-1 flex flex-row"
            target="_blank"
            href={contacto.link}
            key={contacto.link}
            >
            {contacto.icon}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
