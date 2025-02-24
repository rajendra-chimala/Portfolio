import Image from "next/image";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function Home() {
  return (
   <>
   <div className="lg:flex lg:items-center lg:h-[100vh]">

   <Header/>
   <Profile/>
   </div>
   </>
  );
}
