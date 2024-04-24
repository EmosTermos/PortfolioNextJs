import { FaLinkedinIn, FaSquareGithub, FaSquareGitlab } from "react-icons/fa6";

import React from 'react'
import Button from "./button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
        {
            socials.map((social, i) => (
                <Button key={i} link={social.link} isIcon  className="hover:bg-lime-800">
                    <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
                </Button>
            ))
        }
    </div>
  )
}


const socials = [
    {
        icon: <FaSquareGitlab className="w-4 h-4"/>,
        link: "https://gitlab.com/Keweon",
        username: "Keweon"
    },
    {
        icon: <FaSquareGithub className="w-4 h-4"/>,
        link: "https://github.com/EmosTermos",
        username: "Keweon"
    },
    {
        icon: <FaLinkedinIn className="w-4 h-4"/>,
        link: "https://www.linkedin.com/in/kamil-d-076559217/",
        username: "Kamil Dąbrowski"
    },
]