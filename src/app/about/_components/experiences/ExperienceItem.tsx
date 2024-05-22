

const ExperienceItem: React.FC<{ title: string, desc: string, data: string, company: string, left: boolean }> = (props) => {

    const sectionLeftOrRight = () => (
        <div className="w-1/3 ">
            {/* Jop Title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                {props.title}
            </div>
            {/* Jop Des */}
            <div className="p-3 text-sm italic">{props.desc}</div>
            {/* Jop Date */}
            <div className="p-3 text-red-400 text-sm font-semibold">{props.data}</div>
            {/* Company Name */}
            <div className="p-1 w-fit rounded bg-white text-sm font-semibold">{props.company}</div>
        </div>
    )
    return (
        <>
            <div className="flex justify-between h-48">
                {/* Left */}
                {props.left ? sectionLeftOrRight() :  <div className="w-1/3 "></div>}

                {/* Center */}
                <div className="w-1/6 flex justify-center">
                    {/* Line */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                        {/* Circle */}
                        <div className="absolute ring-4 w-5 h-5 ring-red-400 bg-white -left-2 rounded-full">

                        </div>
                    </div>
                </div>
                {/* Right */}
                {props.left ?  <div className="w-1/3 "></div> : sectionLeftOrRight()}
            </div>
        </>
    )
}

export default ExperienceItem