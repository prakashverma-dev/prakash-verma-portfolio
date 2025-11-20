import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full md:h-screen text-white h-unset'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">Hey! I'm Prakash Verma, a dedicated Full-stack Developer currently pursuing my M.Tech from IIT Patna. Alongside my academic journey, I bring 1.8 months of professional experience as an Associate Software Engineer, where I worked on real-world applications and strengthened my foundations in JavaScript, ReactJS, Node.js, and modern web development. 

                    <p>

I also did a 4-month full-stack development internship, where I am actively working with ReactJS, ExpressJS, JWT authentication, MongoDB, and REST APIs. Over time, I've developed a strong interest in building user-friendly interfaces, optimized backend systems, and secure web applications. </p>

I enjoy solving problems, learning new technologies, and writing clean, maintainable code. When I'm not coding, I explore UI/UX ideas, improve my English communication, and work on personal projects that help me grow as a developer.
                    </p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web full stack applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>

                    <a href='/images/Resume.pdf' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                        Get Resume
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </a>

                
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
