import { useState } from "react";
import "./Works.scss"

export default function Works() {

  const [currentSlider,setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon:"assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: "assets/works1.jpg",
    },
    {
      id: "2",
      icon:"assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: "assets/works2.jpg",
    },
    {
      id: "3",
      icon:"assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: "assets/works3.jpg",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider -1 : 2) :
              setCurrentSlider(currentSlider < data.length -1 ? currentSlider+1 : 0);
  }

  return (
    <div className='works' id="works">
      <div className="slider" 
          style={{transform: `translateX(-${currentSlider *100}vw)`}}
        >
        {data.map((d)=>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>
                  {d.title}
                </h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))
        }
      </div>
      <img src="assets/arrow1.png" 
            onClick={()=>handleClick("left")}
            className="arrow left" alt="" />
      <img src="assets/arrow1.png" 
            onClick={()=>handleClick("right")}
            className="arrow right" alt="" />
    </div>
  )
}
