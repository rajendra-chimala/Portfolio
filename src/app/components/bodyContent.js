import React from 'react'
import { TiLocation } from "react-icons/ti";
import { FaLanguage,FaNodeJs,FaReact,FaJava  } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiVorondesign } from "react-icons/si";
import { BsServer } from "react-icons/bs";







const BodyContent = () => {
  return (
    <div className='bg-[#27292d] w-[900px] rounded-md h-[83vh]'>

    <div id='about' className='p-3'>

        <div className='lg:flex gap-3 grid '>


            <div className='w-[50%]'>
                <p className='text-sm  text-justify'>Hey there, hi! I'm Rajendra Chimala, a passionate software developer with expertise in Java, JavaScript, and full-stack development. I specialize in building robust applications using technologies like Node.js, Express, MongoDB, React, and Next.js. I also have experience with Spring Boot for backend development and WordPress for web solutions. Beyond development, I’m exploring AI, game development, and server hosting. Always eager to learn and innovate! 🚀
</p>

            </div>
            <div>

                <div>
                    <span className='bg-[#15191c] flex items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3'><TiLocation/> Sudurpaschim Kailali, Nepal</span>  
                    <span className='bg-[#15191c] flex items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3 mt-2'><FaLanguage/> Nepali English</span>
                    <div className='bg-[#15191c] mt-2 items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3'>
                        <span>Skills</span>
                        <span className='grid grid-cols-6 gap-3 text-2xl '><FaNodeJs  className='bg-[#27292d] p-1 rounded-md'/> <FaReact  className='bg-[#27292d] p-1 rounded-md'/> <BiLogoMongodb className='bg-[#27292d] p-1 rounded-md'/> <FaJava  className='bg-[#27292d] p-1 rounded-md'/> <SiMysql className='bg-[#27292d] p-1 rounded-md'/> <RiNextjsFill className='bg-[#27292d] p-1 rounded-md'/></span>
                    </div>


                </div>


            </div>
        </div>

        <div>
            <p>My Services</p>
            <div>
                     <div>
                        <SiVorondesign/>
                        <p>Front-end Development</p>
                        <p>I provide frontend development services using React and Next.js, crafting dynamic, high-performance web applications. I also specialize in seamless API integration to connect your frontend with robust backend services.</p>
                     </div>


                     <div>

                        <BsServer/>
                        <p>Back-end Development</p>
                        <p>I offer backend development services using Node.js, building scalable and secure server-side applications. I ensure smooth API integration to connect your backend with any frontend platform seamlessly.</p>
                     </div>


                     <div>
                        <BsServer/>
                        <p>Back-end Development</p>
                        <p>I offer backend development services using Node.js, building scalable and secure server-side applications. I ensure smooth API integration to connect your backend with any frontend platform seamlessly.</p>
                     </div>


            </div>


        </div>

    </div>


    </div>
  )
}

export default BodyContent