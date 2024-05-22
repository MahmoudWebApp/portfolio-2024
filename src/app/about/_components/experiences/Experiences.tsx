import React, { useRef } from 'react'
import ExperienceItem from './ExperienceItem'
import { motion, useInView } from 'framer-motion'

const experiencesList = [
    { id: 1, title: "Frontend Developer", Description: "Front End Team Manager and responsible for organizing tasks for the team", dataString: "2023 - present", company: "Nasca Sy", left: true },
    { id: 2, title: "Frontend Developer", Description: "Front End Team Manager and responsible for organizing tasks for the team", dataString: "2023 - present", company: "Free Lancer", left: false },
    { id: 3, title: "Frontend Developer", Description: "Junior developer", dataString: "2022/04 - 2022/08", company: "Mongid", left: true },
]


const Experiences = () => {
    const experienceRef: any = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" })
    return (
        <>
            <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                <motion.h2
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.2 }}
                    className='font-bold text-2xl'>
                    EXPERIENCE
                </motion.h2>
                {/* Experience List */}
                <motion.div
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    className="">
                    {/* Experience Item */}
                    {experiencesList?.map(e => <ExperienceItem title={e.title} desc={e.Description} data={e.dataString} company={e.company} left={e.left} key={e.id} />)}
                </motion.div>

            </div>
        </>
    )
}

export default Experiences