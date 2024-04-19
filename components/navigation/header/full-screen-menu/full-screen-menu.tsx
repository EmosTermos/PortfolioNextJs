import React from 'react'
import {motion} from "framer-motion"
import { menuSlide } from './animation'
import Curve from './curve'
import Link from 'next/link'
import NavLink from './nav-link'

export default function FullScreenMenu () {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-full sm:w-[30%] w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      {/*NAVLINK*/}
      <div className="absolute top-[40%] xl:top-[25%] w-full lg:px-[5%]">
          <div className="pl-4 flex flex-col items-center leading-50">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
      </div>

      {/*Footer links*/}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="hidden md:flex md:flex-wrap md:items-center md:justify-between md:uppercase md:text-sm xl:text-base text-white">

          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/kamil-d-076559217/" target="_blank">LINKEDIN</Link>
            <Link href="https://gitlab.com/Keweon" target="_blank">GITLAB</Link>
            <Link href="https://github.com/EmosTermos" target="_blank">GITHUB</Link>
            <Link href="https://www.instagram.com/x_emos_/" target="_blank">INSTAGRAM</Link>
          </div>
 
          <div className="flex items-center gap-4">
            <Link href="/">©2024</Link>
          </div>
        </div>
      </div>
        <Curve />
      </motion.div>
   )
}

  const navItems = [
    {
        title: "Landing",
        href: "#/landing",
    },
    {
        title: "Projects",
        href: "/#projects",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Contact",
        href: "/#contact",
    },
  ]