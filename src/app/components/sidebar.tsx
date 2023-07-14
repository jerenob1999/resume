import React from "react";
import Image from "next/image";
import profile from "../../../public/Profile.jpg";

function Sidebar({ info }) {
  return (
    <div className='bg-black text-white content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed '>
        <div className="flex flex-col items-center">

 

      <Image
        className="rounded-full h-40 w-40 overflow-hidden"
        src={profile}
        alt="Profile picture"
      />
      <h1>{info.name}</h1>
      <h2>{info.role}</h2>
      <p>{info.education[0]}</p>
      <p>{info.education[1]}</p>
      <h3>Contact me</h3>
      <div className="flex flex-row">
        {info.contactt.map((contacto) => (
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
