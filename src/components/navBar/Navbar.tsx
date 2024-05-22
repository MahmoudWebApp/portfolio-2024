'use client'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from "./NavLink"
import { motion } from "framer-motion"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  // { url: "/contact", title: "Contact" },
]
const socialLinks = [
  { id: 1, url: "https://www.facebook.com/MahmoudAhmedEn/", src: "/assets/facebook.png", name: "facebook" },
  { id: 2, url: "https://www.linkedin.com/in/mahmoud-ahmed-0839b5230/", src: "/assets/linkedin.png", name: "linkedin" },
  { id: 3, url: "https://github.com/MahmoudWebApp", src: "/assets/github.png", name: "github" },
]
const topVariants = {
  closed: {
    rotate: 0
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)"
  }
}
const centerVariants = {
  closed: {
    opacity: 1
  },
  opened: {
    opacity: 0
  }
}
const bottomVariants = {
  closed: {
    rotate: 0
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)"
  }
}
const listVariants = {
  closed: {
    x: "100vh"
  },
  opened: {
    x: 0,
    transition: {
      when:"beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0
  },
  opened: {
    x: 0,
    opacity: 1

  }
}
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 text-black  w-1/3">
        {links?.map(link => <NavLink url={link.url} title={link.title} key={link.title} />)}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href={'/'} className=" flex justify-center items-center text-sm p-1 bg-black rounded-md font-semibold">
          <span className="text-white mr-1">MHM</span>
          <span className="w-12 h-8 rounded flex items-center justify-center bg-white text-black">.DEV</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialLinks?.map(link => <Link href={link.url} key={link.id} target='_blank'>
          <Image src={link.src} width={24} height={24} alt={link.name} />
        </Link>)}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* button Menu */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"> </motion.div>
        </button>
        {/* Menu List */}
        {open &&
          <motion.div variants={listVariants} initial="closed" animate="opened" className=" absolute top-0 left-0 z-10 w-screen h-screen bg-black text-white flex flex-col justify-center items-center  gap-8 text-4xl">
            {links?.map(link =>
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}  >{link.title}</Link>
              </motion.div>
            )}

          </motion.div>
        }

      </div>
    </div>
  )
}

export default Navbar