'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-12">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/assets/hero.png" fill alt="" className="object-contain" />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col lg:gap-8 gap-6 items-center justify-center text-black">
          <h1 className="text-3xl md:text-5xl font-bold ">Crafting Digital Experiences , Designing Tomorrow</h1>
          <p className="lg:text-xl text-lg">
          Front-end developer with a proven ability to collaborate effectively with senior developers while spending extra time being mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally pick up the slack when necessary          </p>
          <div className=" w-full flex gap-4">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white  ">
                View My Work
              </button>
            </Link>
            <Link href={'assets/Mahmoud-Ahmed-CV.pdf'} target="_blank">
              <button className="p-4 rounded-lg ring-1 ring-black">
               download CV
                </button>
            </Link>
          </div>
        </div>

      </div>
    </motion.div>

  );
}
