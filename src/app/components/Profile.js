import Image from "next/image";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaDownload,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="rounded-b-xl rounded-t-md p-2 bg-gray-200 w-60 dark:bg-[#27292d] text-gray-950 dark:text-white pb-3 shadow-md  transform rotate-y-[18deg] w-auto lg:w-80 ">
      <img
        src="/profiler.jpg"
        alt="Rajendra Chimala"
        className="rounded-lg shadow-xl text-center justify-center m-auto"
      />
      <p className="text-center font-bold text-3xl dark:text-gray-300 mt-2">
        RAJENDRA CHIMALA
      </p>
      <p className="text-center dark:text-gray-300">BICTE 5th Semester</p>

      <div>
        <ul className="flex gap-4 text-[25px] dark:text-white justify-center mt-3">
          <li>
            <Link href="https://www.linkedin.com/in/rajendra-chimala-8422a2352/">
              <FaLinkedin />
            </Link>
          </li>

          <li>
            <Link href="https://www.facebook.com/profile.php?id=61558786501968">
              <FaFacebookSquare />
            </Link>
          </li>

          <li>
            <Link href="https://github.com/rajendra-chimala">
              <FaGithubSquare />
            </Link>
          </li>

          <li>
            <Link href=" https://wa.me/9868821573">
              <FaWhatsappSquare />
            </Link>
          </li>
          <li>
            <FaInstagramSquare />
          </li>
        </ul>
      </div>

      <hr className="h-[.4px] w-[100%] my-7 bg-gray-500" />

      <div className="flex my-5 justify-around text-sm">
        <Link href="/Rajendra Chimal CV.pdf" download>
          <div className="flex items-center gap-1 font-medium cursor-pointer">
            <p>DOWNLOAD CV</p>
            <FaDownload />
          </div>
        </Link>


        <Link href=" https://wa.me/9868821573">
        <div className="flex items-center gap-1 font-medium cursor-pointer">
          <p>CONTACT ME</p>
          <FaPhone />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
