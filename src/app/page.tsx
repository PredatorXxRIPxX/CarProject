import Nav from "@/app/_lib/@nav/nav";
import Image from "next/image";
import Catalogue from "./_lib/@carcatalogue/page";

export default function Home() {
  return (
    <>
    <Nav />
    <div className="w-full h-full flex items-center justify-between p-6">
      <div>
        <h1 className=" font-bold text-5xl mt-5 mb-5">find ,book or rent a car quickly and easly</h1>
        <p className="mb-5 mt-5 text-xl">stream line your car rental experiance with our effortless booking process</p>
        <button className=" bg-violet-700 rounded-2xl flex items-center justify-center p-4">Explore Cars</button>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center z-10 absolute mr-10">
          <Image src={'/image/hero.png'} alt="hero" width={500} height={500} />
        </div>
        <Image className=" z-0" src={'/image/hero-bg.png'} alt="hero" width={2000} height={2000} />
      </div>
    </div>
    <Catalogue />
    </>
  );
}
