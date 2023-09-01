import skillsData from "../skillsData"
console.log(skillsData)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = skillsData.map((skill,index) => (
    <div key={index} className="w-52 h-52 shadow-imgsShadow mx-auto rounded-3xl p-3
     bg-shadeOfBlack mb-10  flex flex-col justify-center gap-4">
        <p className=" text-2xl">{skill.skill}</p>
        <img src={skill.icon} alt="" className=" mx-auto w-24 h-24" />
    </div>
))

function Skills(){
    return(
        <>
            <h2 className="text-3xl mb-9 sm:text-5xl">Skiils</h2>

            <div className="grid grid-cols-auto">
                {skills}
            </div>

        </>
    )
}

export default Skills