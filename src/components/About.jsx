
import about from '../assets/about.webp'
function About(){
    return(
        <>
            <div id='about'>

           
                <h2 className="text-3xl sm:text-5xl">About Me</h2>
                <div className='sm:flex items-center max-w-5xl mx-auto'>
                    <p className='px-8 text-sm mt-5 sm:text-base tracking-wider sm:w-1/2 lg:text-2xl lg:leading-10 '>
                        Hi I am Majd Ali frontend developer .
                         
                        Nice to meet you !
                        I have expriance in Html, CSS, JavaScript, React.js, tailwind css.
                        Always looking to learn new technologies and improve my self to be better than before.
                        I am Open to job apportonuties work with a company or freelance work

                    </p>
                    <img src={about} alt="" className='saturate-[.2] mx-auto w-4/5 h-4/5  sm:w-1/2 sm:h-1/2'/>
                </div>
                <hr className='opacity-20 w-4/5 my-7 mx-auto' />
            </div>
        </>
    )
}

export default About