
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import data from '../projectsData.js'


const projects = data.map(project => (
    <div key={project.id} id='project' className='hover:scale-110 transition-all group relative'>
        <img src={project.img} alt="" className='w-[80%] h-[80%]
         mx-auto my-8 shadow-imgsShadow rounded-[1.25rem] '  />
         
        <div className='flex w-52 mx-auto absolute left-2/4 -translate-x-2/4 -bottom-[30px] -mt-[17px] justify-between group-hover:bg-secondary group-hover:p-4 
        group-hover:bottom-[10%] group-hover:rounded-3xl z-10 transition-all  
        '>
            <div>
                <a href={project.liveUrl} target='_blank'>
                    <FontAwesomeIcon icon ={faUpRightFromSquare} className='mr-[5px]  ' />
                    Live Url
                </a>
            </div>
            <div>
                <a href={project.githubRepo} target='_blank' >
                    <FontAwesomeIcon icon={faCode} className='mr-[5px]' />
                    Code
                </a>
            </div>
        </div>
    </div>
))
function Projects(){
    return(
        <>
        <div>
            <h2 className="text-3xl sm:text-5xl mb-[1em]">Projects</h2>
            <div className='grid grid-cols-auto gap-12 px-8 lg:px-20'>
                {projects}
            </div>
        </div>
        <hr className='opacity-20 w-4/5 my-7 mx-auto' />
        </>
    )
}

export default Projects