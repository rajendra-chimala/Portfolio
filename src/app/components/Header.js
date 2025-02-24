import { RiMenu3Line } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BiSolidUserPin } from "react-icons/bi";
import { RiFileList2Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";






const Header = () => {
  return (
    <div className="lg:">
    <div className="flex lg:hidden justify-between mx-4 my-2 items-center">

        <div className="dark:text-white">

            <p className="font-medium text-[17px]">Rajendra Chimala</p>
            <p className="text-[10px] font-thin -mt-1 text-[#61ce70]">BICTE 5th Semester</p>

        </div>
        <div className="text-3xl flex items-center gap-3">
        <MdLightMode/>
        {/* <MdDarkMode/> */}
        <RiMenu3Line />

        </div>



    </div>

    <div className="mx-4 my-2 text-2xl mt-8 lg:bg-slate-800 lg:shadow-lg lg:rounded-full lg:p-3">

            <ul className='flex lg:block  justify-center gap-7 items-center'>
                <li className="text-center lg:mt-3">
                <BiSolidUserPin className='m-auto'/>
                <p className="text-[12px] -mt-2 text-center font-semibold dark:text-white">ABOUT</p>
                    
                </li>   
                
                <li className='lg:mt-3'>
                <RiFileList2Fill className='m-auto'/>
                <p className="text-[12px] -mt-2 text-center font-semibold dark:text-white">RESUME</p>
                   

                </li>

                <li className='lg:mt-3'>
                <AiFillProject className='m-auto'/>
                <p className="text-[12px] -mt-2 text-center font-semibold dark:text-white">PROJECT</p>
                   
                </li>


                <li className='lg:mt-3'>
                <FaBlogger className='m-auto'/>
                <p className="text-[12px] -mt-2 text-center font-semibold dark:text-white">BLOG</p>
                   
                </li>

                <li className='lg:mt-3'>
                <MdEmail className='m-auto '/>
                <p className="text-[12px] -mt-2 text-center font-semibold dark:text-white">CONTACT</p>
                   
                </li>

               
            </ul>
    </div>

   </div>
  )
}

export default Header