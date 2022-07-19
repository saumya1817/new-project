import "./Testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/right-arrow.png" 
                    className="left" alt="" />
              <img 
                className="user" src="assets/testimonial1.jpg"
                    alt="" />
            </div>
            <img className="right"
              src="assets/youtube.png" alt="" />
            <div className="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div className="bottom">
                <h3>Alex</h3>
                <h4>CEO of ABC</h4>
            </div>
          </div>
        </div>

    </div>
  )
}
