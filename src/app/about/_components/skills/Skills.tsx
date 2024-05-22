import React, { useRef } from 'react'
import Image from "next/image"
import { motion, useInView } from 'framer-motion';

const skillsList = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JAVASCRIPT" },
  { id: 4, title: "TYPESCRIPT" },
  { id: 5, title: "REACT JS " },
  { id: 6, title: "REDUX JS" },
  { id: 7, title: "BOOTSTRAP" },
  { id: 8, title: "TAILWIND" },
  { id: 9, title: "ANT DESIGN" },
  { id: 10, title: "MATERIEL UI" },
  { id: 11, title: "GIT & GITHUB" },
  { id: 12, title: "NEXT JS" },
  { id: 13, title: "WORDPRESS" }
]

const Skills: React.FC = () => {
  const skillRef: any = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })
  return (
    <>
      <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
        <motion.h2
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: "0" } : {}}
          transition={{ delay: 0.2 }}
          className='font-bold text-2xl'>
          SKILLS
        </motion.h2>
        <motion.div className=" flex gap-4 flex-wrap"
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: "0" } : {}}>
          {skillsList?.map(s => <div className="p-2 bg-black text-white rounded hover:bg-white hover:text-black" key={s.id}>{s.title}</div>)}
        </motion.div>
        <div className="">
          <Image src="/assets/scroll.png" alt="the signature" width={50} height={50} />
        </div>
      </div>
    </>
  )
}

export default Skills