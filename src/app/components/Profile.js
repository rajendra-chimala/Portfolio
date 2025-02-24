
import Image from "next/image";
import { FaLinkedin,FaFacebookSquare,FaWhatsappSquare,FaGithubSquare,FaInstagramSquare ,FaDownload ,FaPhone     } from "react-icons/fa";




const Profile = () => {
  return (

    <div className="rounded-b-xl bg-black pb-3 shadow-md  transform rotate-y-[18deg] lg:w-80 ">

        <img src="/profiler.jpg" alt="Rajendra Chimala" className="rounded-lg"/>
        <p className="text-center font-semibold text-3xl text-gray-300 mt-2">RAJENDRA CHIMALA</p>
        <p className="text-center text-gray-300">BICTE 5th Semester</p>

        <div>

            <ul className="flex gap-4 text-[25px] justify-center mt-3">
                <li>
                    <FaLinkedin/>

                </li>

                <li>
                <FaFacebookSquare/> 
                </li>

                <li>
                    <FaGithubSquare  />
                </li>

                <li>
                    <FaWhatsappSquare  />
                </li>
                <li>
                    <FaInstagramSquare  />
                </li>


            </ul>
        </div>

        <hr className="h-[.4px] w-[100%] my-7 bg-gray-500"/>

        <div className="flex my-5 justify-around text-sm">

            <div className="flex items-center gap-1 font-medium cursor-pointer">
                <p>DOWNLOAD CV</p><FaDownload />

            </div>


            <div className="flex items-center gap-1 font-medium cursor-pointer">
            <p>CONTACT ME</p><FaPhone />
            </div>
        </div>

       
        
    </div>

  )
}

export default Profile