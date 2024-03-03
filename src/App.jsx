import React from "react"
import Sparkles from "./components/SparklesPreview"
import Navbar from "./components/navbar"
import HeroScroll from "./components/HeroScrollDemo"
import Brand from "./components/Brands"
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./components/Blog"
import Footers from "./components/footer"

export default function App() {

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
      }
    );
    AOS.refresh();
  },[])


  return (
    
    <div>
      <Navbar />
      <Sparkles />
      <HeroScroll />
      <Brand />
      <Blogs />
      <Footers />
    </div>
  )
}