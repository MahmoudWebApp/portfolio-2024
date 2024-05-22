'use client'
import { AnimatePresence, delay, motion } from 'framer-motion'
import React from 'react'
import Navbar from '../navBar/Navbar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathName = usePathname()
    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className=" h-screen bg-gradient-to-b from-blue-100 to-red-100 text-black">
                <motion.div className="w-screen h-screen bg-black rounded-b-[100px] fixed z-40 "
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div className="fixed m-auto bottom-0 top-0 left-0 right-0 z-50 w-fit h-fit text-white text-8xl cursor-default "
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}

                >
                    {pathName.substring(1)}
                </motion.div>
                <motion.div className="w-screen h-screen bg-black rounded-t-[100px] bottom-0 fixed z-30 "
                   initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5} }}

                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>

            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider