'use client'
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Image from "next/image"

import Brain from '@/components/brain/Brain'
import Skills from './_components/skills/Skills'
import Experiences from './_components/experiences/Experiences'



const AboutPage = () => {
  const containerRef = useRef(null);
  const {scrollYProgress}=useScroll({ container: containerRef })


  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* Content */}
      <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>

        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography */}
          <div className="  flex flex-col gap-12 justify-center">
            <h2 className='font-bold text-2xl'>  BIOGRAPHY</h2>
            <p className='text-lg'>
            My name is Mahmoud Al-Ahmad, and I was born in 1987. I am currently single and have been working as a front-end developer for over three years. I graduated with a degree in information engineering from the Syrian Virtual University.            </p>
            <span>&apos;Programming is the language that devices speak, and source code is a beautiful poem written by programmers.&apos;</span>
            <div className="italic">
              <Image src="/assets/signature.png" alt="the signature" width={240} height={100} />
            </div>
            <div className="">
              <Image src="/assets/scroll.png" alt="the signature" width={50} height={50} />
            </div>

          </div>
          {/* Skills */}
         <Skills/>
          {/* Experience*/}
          <Experiences />
        </div>
        {/* SVG */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 lg:w-1/2">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>

    </motion.div>
  )
}

export default AboutPage