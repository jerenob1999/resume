import React from 'react'

interface Experience {
    title:String,
    body:String[]
}

function Proyects({experience}: {experience: Experience[]}) {
  return (
    <div>
        <h3>{experience[0].title}</h3>
        {experience[0].body.map((exp,index) => <p key={index}>{exp}</p>)}
        <h3>{experience[1].title}</h3>
        {experience[1].body.map((exp,index) => <p key={index}>{exp}</p>)}
        </div>
  )
}

export default Proyects