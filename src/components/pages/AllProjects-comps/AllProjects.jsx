import React from 'react'
import { Link } from 'react-router-dom'


const AllProjects = () => {

    const projects = [
     
      {
        id: 1,
        title: "URL Shortner with Analytics",
        description: "A full-stack URL Shortener built with Node.js, Express, EJS, and MongoDB Atlas. Supports user signup/login with JWT authentication, bcrypt-secured passwords, and dynamic short link generation.",
        technologies: "Node.js, Express, EJS, and MongoDB Atlas, Tailwind CSS",
        src: "/images/projectsImages/urlShort.png",
        demo: "https://bitly.up.railway.app/",
        code: "https://github.com/prakashverma-dev/URL-Shortner-with-Analytics",
      },
      {
        id: 2,
        title: "Web-Based Real-Time Communication Platform ",
        description:
          "A lightweight real-time chat app using ExpressJS and Socket.IO with username login, online user count, and instant message broadcasting.",
        technologies: " Node.js, ExpressJS , Socket.IO , HTML + CSS + JavaScript",
        src: "/images/projectsImages/publicchat.png",
        demo: "https://public-chat-app-s4m5.onrender.com/",
        code: "https://github.com/prakashverma-dev/public-chat-app",
      },
      {
        id: 3,
        title: "Airbnb Travel & Listing App",
        description:
          "A MERN-based Airbnb-style rental platform with secure authentication, property management, and end-to-end booking features.",
        technologies: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
        src: "/images/projectsImages/airbnb.png",
        demo: "https://airbnb-clone-indol-psi.vercel.app/",
        code: "https://github.com/prakashverma-dev/Airbnb-clone-travel-listing",
      },
      {
        id: 4,
        title: "Downloadify - Youtube Media Tool",
        description:
          "A simple and powerful CLI-based YouTube Downloader App built with Python Supports downloading mp4 videos and mp3 audio with interactive menu selection using InquirerPy",
        technologies: "Python, pytubefix, ffmpeg, InquirerPy, and on_progress hook",
        src: "/images/projectsImages/FormateSelection.png",
        demo: "https://github.com/prakashverma-dev/Youtube-Downloadify-app",
        code: "https://github.com/prakashverma-dev/Youtube-Downloadify-app",
      },
    
    
      {
        id: 5,
        title: "My TODO App",
        description:
          "ToDo App Where we add our daily activities to do daily",
        technologies: "ReactJS, Javascript, HTML5, Tailwind CSS",
        src: "/images/projectsImages/TODO.png",
        demo: "https://todo-app-lists-daily.netlify.app/",
        code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/10.TO%20DO%20List",
      },
      {
        id: 6,
        title: "Modern Calculator",
        description:
          "A modern calculator built with React.js is a project that leverages React's component-based architecture and state management, typically using useState hooks.",
        technologies: "Javascript, ReactJS, Tailwind CSS, HTML, CSS",
        src: "/images/projectsImages/calculator.png",
        demo: "https://modern-calculator-fast.netlify.app/",
        code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/8.Calculator",
      },
    
      {
        id: 7,
        title: "e-commerce Application",
        description: "Developed E-commerce application with React JS and Tailwind CSS for product displaying and Add to cart feature with checkout for ordered products.",
        technologies: "Javascript, React, Redux, Tailwind CSS",
        src: "/images/projectsImages/ecommerce.png",
        demo: "https://e-commerce-modern.netlify.app/",
        code: "https://github.com/TheVermaVD/Ecommerce-Website",
      },

      {
        id: 8,
        title: "Form Validation",
        description:
          "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
        technologies: "Javascript, React, Tailwind CSS",
        src: "/images/projectsImages/Form-validation.png",
        demo: "https://form-validation-inputs.netlify.app/",
        code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/5.Form%20Validation",
      },
      
    
        {
          id: 9,
          title: "Temperature Converter",
          description:
            "Temperature converter from Celcios to Faren",
          technologies: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/Temp Converter.png",
          demo: "https://temperature-converter-degree.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/1.Temperature%20Converter",
        },
      
        {
          id: 10,
          title: "StopWatch",
          description:
            "StopWatch To Use At various places",
          technologies: "Javascript, HTML5, CSS3",
          src: "/images/projectsImages/StopWatch.png",
          demo: "https://stopwatch-realtime.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/7.Stopwatch",
        },
      
        {
          id: 11,
          title: "Word and Character Counter",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Word Character Counter.png",
          demo: "https://words-character-counter.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/2.Word%20And%20Character%20Counter",
        },
    
        {
          id: 12,
          title: "Background Switcher",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Background-switcher.png",
          demo: "https://background-switcher-mode.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/3.Background%20Changer",
        },
        {
          id: 13,
          title: "Sticky Navbar",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/Sticky-Navbar.png",
          demo: "https://sticky-navbar-modern.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/4.Sticky%20Menu%20Bar",
        },

        {
          id: 14,
          title: "desktop-dashboard",
          description:
            "Temperature converter from Celcios to Faren",
          technologies: "Javascript, HTML5, Tailwind CSS",
          src: "/images/projectsImages/desktop.png",
          demo: "https://desktop-dashboard1.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/16.%20DashBoard",
        },
        {
          id: 15,
          title: "Landind Page of any Website",
          description:
            "An application to know the weather in your current location in degrees Celsius or degrees Fahrenheit. You can also search for the weather in other cities around the world.",
          technologies: "Javascript, React, Tailwind CSS",
          src: "/images/projectsImages/LandingPage.png",
          demo: "https://landing-paggeee.netlify.app/",
          code: "https://github.com/TheVermaVD/Realtime-Projects/tree/main/17.LandingPage",
        },



      ];

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
