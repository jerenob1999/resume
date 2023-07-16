import React from 'react'

interface Experience {
    title:String,
    body:String[]
}

function Proyects({experience}: {experience: Experience[]}) {
  return (
    <div>
        {experience.map((exp,index) => {
            return (
                <section key={index}>
                <h3>{exp.title}</h3>
                <ul>
                    {exp.body.map((body,index) => {
                        return (
                            <li key={index} >
                                {body}
                            </li>
                        )
                    })}
                </ul>
                </section>
            )
        })}
        </div>
  )
}

export default Proyects