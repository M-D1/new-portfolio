




function NavBar(){
   
  
    
    return(
        <>
            <header>
                <nav className='mt-4 mx-4 flex items-center justify-between sm:justify-normal sm:gap-4' >
                    <div className='text-4xl' >M</div>
                    
                    <div className=' hidden sm:block bg-accent py-3 ml-auto w-[55%] '>
                        <ul className='flex justify-around'>
                            <li className=''>
                             
                                <a href="#" className='text-[.9375rem]'>Project</a>
                            </li>
                            <li className=''>
                                
                                
                                <a href="#" className='text-[.9375rem]'>About Me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </header>
        </>
    )
}
export default NavBar