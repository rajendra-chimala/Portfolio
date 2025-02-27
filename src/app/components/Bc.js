import React from 'react'
import { TiLocation } from "react-icons/ti";
import { FaLanguage,FaWordpress ,FaNodeJs,FaReact,FaJava,FaGraduationCap   } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiVorondesign } from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";








const BodyContent = () => {
  return (
    <div className='bg-[#27292d] w-fit lg:w-[900px] rounded-md h-auto lg:h-[83vh] overflow-auto scrollbar-hide '>

    <div id='about' className='p-3'>

        <div className='lg:flex gap-3 grid '>


            <div className='lg:w-[50%]'>
                <p className='text-sm bg-[#15191c] p-3 rounded-xl text-justify'>Hey there, hi! I'm Rajendra Chimala, a passionate software developer with expertise in Java, JavaScript, and full-stack development. I specialize in building robust applications using technologies like Node.js, Express, MongoDB, React, and Next.js. I also have experience with Spring Boot for backend development and WordPress for web solutions. Beyond development, I’m exploring AI, game development, and server hosting. Always eager to learn and innovate! 
</p>

            </div>
            <div>

                <div>
                    <span className='bg-[#15191c] flex items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3'><TiLocation/> Sudurpaschim Kailali, Nepal</span>  
                    <span className='bg-[#15191c] flex items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3 mt-2'><FaLanguage/> Nepali English</span>
                    <div className='bg-[#15191c] mt-2 items-center gap-2 py-3 pr-14 rounded-lg shadow-sm px-3'>
                        <span>Skills</span>
                        <span className='grid grid-cols-6 gap-3 text-2xl '><FaNodeJs  className='bg-[#27292d] p-1 rounded-md text-green-400'/> <FaReact  className='bg-[#27292d] text-green-400 p-1 rounded-md'/> <BiLogoMongodb className='bg-[#27292d] p-1 text-green-400 rounded-md'/> <FaJava  className='bg-[#27292d] p-1 text-green-400 rounded-md'/> <SiMysql className='bg-[#27292d] p-1 text-green-400 rounded-md'/> <RiNextjsFill className='bg-[#27292d] p-1 rounded-md text-green-400'/></span>
                    </div>


                </div>


            </div>
        </div>

        <div>
            <p>My Services</p>
            <div className='grid lg:grid-cols-2 gap-3'>
                     <div className='boxauto'>
                        <SiVorondesign className="text-3xl p-1 bg-green-800 shadow-lg  rounded-full"/>
                        <p className='text-green-400'   >Front-end Development</p>
                        <p className='text-sm font-light'>I provide frontend development services using React and Next.js, crafting dynamic, high-performance web applications. I also specialize in seamless API integration to connect your frontend with robust backend services.</p>
                     </div>


                     <div  className='boxauto'>

                        <BsServer className="text-3xl p-1 bg-green-800 shadow-lg  rounded-full"/>
                        <p className='text-green-400'>Back-end Development</p>
                        <p className='text-sm font-light'>I offer backend development services using Node.js, building scalable and secure server-side applications. I ensure smooth API integration to connect your backend with any frontend platform seamlessly.</p>
                     </div>


                     <div  className='boxauto'>
                        <FaWordpress  className="text-3xl p-1 bg-green-800 shadow-lg  rounded-full"/>
                        <p className='text-green-400'>Wordpress Development</p>
                        <p className='text-sm font-light'>We create custom WordPress websites, plugins, and themes tailored to your needs. Get a fast, secure, and SEO-friendly site for your business today!</p>
                     </div>

                     <div  className='boxauto'>
                        <MdDesignServices  className="text-3xl p-1 bg-green-800 shadow-lg  rounded-full"/>
                        <p className='text-green-400'>Logo Design</p>
                        <p className='text-sm font-light'>Professional logo design services tailored to your brand identity. Get a unique, creative, and memorable logo for your business.</p>
                     </div>



            </div>


        </div>

    </div>

    <div id='resume' className='p-5'>
        <p>RESUME</p>


        <div className='lg:flex grid grid-cols-1 gap-2'>
            <div className='lg:w-[50%]'>
                <div className='flex gap-2 items-center '>
                <FaGraduationCap className='text-xl p-[2px] text-center m-auto lg:m-0 bg-green-400 rounded-full' />
                <p className='text-center lg:text-left'>Education</p>

                </div>


                <div className='flex items-center'>

                    <div className='h-44 '>
                        <div className='bg-green-400 w-[1px] h-[100%] flex-col justify-between'>
                            <div className='h-2 w-2 bg-green-400 rounded-full -ml-[3.5px] -mt-1 items-start'></div>
                            <div className='h-2 grid w-2 bg-green-400 rounded-full -ml-[3.5px] mt-40 '></div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1'>
                    <div className='w-full bg-[#15191c] m-2 p-2 rounded-md'>
                        <p className='font-semibold'>Diploma in Computer Application</p>
                        <p className='text-xs font-medium text-green-400'>Jayashowori Computer Training Center</p>
                        <p className='text-xs mt-1 font-thin'>Microsoft Office Package, including Word, Excel, and PowerPoint; Adobe Photoshop for graphic design; and Page Maker for desktop publishing – Accounting software like Tally for financial management – MS-DOS for command-line operations and Web Technology for building and managing websites.
</p>

                    </div>

                    <div className=' w-full bg-[#15191c] m-2 p-2 rounded-md'>
                        <p className='font-semibold'>Bachelor in Information Communication Technology Education,</p>
                        <p className='text-xs font-medium text-green-400'>Ghodaghodi Multiple Campus</p>
                        <p className='text-xs mt-1 font-thin'>The BICTE program blends ICT and education, covering programming, networking, and digital learning. It prepares graduates for careers as ICT teachers, education technologists, and IT professionals in the education sector.
</p>

                    </div>
                    </div>
                </div>
            </div>
            <div>

                <p>Skills</p>


            </div>




        </div>


    </div>


    </div>
  )
}

export default BodyContent