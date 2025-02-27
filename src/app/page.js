import Image from "next/image";
import Header from "./components/Header";
import Profile from "./components/Profile";
import BodyContent from "./components/Bc";



export default function Home() {
  return (
   <>
   <div className="lg:flex grid lg:items-center gap-3 lg:h-[100vh]">

   <Header/>
   <Profile/>
   <BodyContent/>
   
   </div>
   </>
  );
}
