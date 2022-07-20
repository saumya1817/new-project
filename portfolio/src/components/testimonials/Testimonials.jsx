import "./Testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Yash Vaidya",
      title: "CFO",
      img: "assets/testimonials1.jpg",
      icon: "assets/twitter.png",
      decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Sya",
      title: "CEO",
      img: "assets/testimonial1.jpg",
      icon: "assets/youtube.png",
      featured: true,
      decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      name: "Alex Kalinski",
      title: "CTO",
      img: "assets/testimonials3.jpg",
      icon: "assets/linkedin.png",
      decs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d)=>(
            <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" 
                    className="left" alt="" />
              <img 
                className="user" src={d.img} alt="" />
              <img className="right"
              src={d.icon} alt="" />  
            </div>
            <div className="center">
                {d.decs}
            </div>
            <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
