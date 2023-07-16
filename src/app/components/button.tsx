"use client"
import React,{useState} from 'react'


interface Language {
    language: string
} 


function Button({language} : {language:Language}) {
    const [leng, setLeng] = useState("ENG")
  return (
    <div>{leng}</div>
  )
}

export default Button