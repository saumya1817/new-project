// import {Person} from '@material-ui/icons';
import "./Topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">

      <div className="left">
        <a href="#intro" className="logo">saumya.</a>
         <div className="itemContainer">
          {/* <Person className="icon" />  */}
          <span>+91 123 456 8885</span>
        </div>
        
        <div className="itemContainer">
          {/* <Mail className="icon"/> */}
          <span>saumya.singh1817@gmail.com</span>

        </div>
      </div>

      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
      </div>
    </div>
  )
}
