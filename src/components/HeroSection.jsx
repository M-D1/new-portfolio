import {useTypewriter , Cursor} from 'react-simple-typewriter'
import heroImg from '../assets/heroImg.webp'

import Particle from './particle'



function Hero(){

    const [text] = useTypewriter({
        words:['Frontend Developer','Freelancer'],
        loop:{}
    })
    return(
        <>
            <div>

                {/* <Particle /> */}
               
                

                <h1 className='text-xl mt-4 sm:text-3xl sm:my-8  lg:'>
                    Hi I am Majd Ali {' '}

                    <span >
                        {text}
                    </span>
                    <Cursor />
                    
                </h1>

                <div className='flex items-center flex-col mt-3 sm:flex-row sm:justify-center sm:gap-4'>

                    <img src={heroImg} alt="" className='saturate-0 w-[70%] aspect-square
                    h-[70%] sm:w-1/2 sm:h-1/2 lg:w-[40%] lg:h-[40%] lg:text-4xl' />
                    <div className='mt-5'>
                        <p className='text-lg mb-3 sm:text-2xl sm:mb-4 lg:text-[2rem] '>Welcome to My website 👋</p>
                        <a href="#" className='
                        relative
                        bg-secondary z-[1] text-[.9375rem] py-[0.3125rem] px-5 rounded-full block mb-3
                        sm:w-[60%] lg:w-[50%] lg:text-lg before:absolute before:inset-0
                       
                         before:bg-white before:z-[-1] before:rounded-full hover:text-black before:scale-x-0
                         before:transition-all  before:duration-700 hover:before:scale-x-100 transition-all duration-700 '>Projects</a>
                        <a href="#" className='
                        relative
                        z-[1]
                        bg-secondary text-[.9375rem] 
                        py-[0.3125rem] px-5 rounded-full block
                        sm:w-[60%] lg:w-[50%] lg:text-lg before:absolute before:inset-0
                       
                        before:bg-white before:z-[-1] before:rounded-full hover:text-black before:scale-x-0
                        before:transition-all  before:duration-700 hover:before:scale-x-100 transition-all duration-700'>About me</a>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 w-4/5 my-7 mx-auto' />

          
        </>
    )
}

export default Hero