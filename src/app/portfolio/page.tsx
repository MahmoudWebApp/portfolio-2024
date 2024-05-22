'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import MyWorks from "./_components/MyWorks";
const PortfolioPage = () => {
  const ref: any = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <motion.div className=" h-full lg:flex" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="" ref={ref}>
        <div className=" h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Works
        </div>
        <div className="md:h-[300vh] h-auto md:pb-0 pb-6  bg-gradient-to-b to-blue-100 from-red-100">
        < MyWorks />
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage