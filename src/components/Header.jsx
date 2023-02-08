import { Menu } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
       <div id="menu-btn" >
       <Menu/>
       </div>
    <Link to="aedvisor" className="logo">
      <img src="images/me.jpg" alt=""/>
    </Link>

    <nav className="navbar">
        <Link to="/">home</Link>
        <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">about</a>
        <a data-aos="zoom-in-left" data-aos-delay="600" href="#service">services</a>
        <a data-aos="zoom-in-left" data-aos-delay="900" href="#">affiliate</a>
        <a data-aos="zoom-in-left" data-aos-delay="900" href="#skills">skills</a>
        <Link to="/aedvisor">Register</Link>
        <a data-aos="zoom-in-left" data-aos-delay="900" href="#testimonials">testimonials</a>
        <a data-aos="zoom-in-left" data-aos-delay="900" href="#contact">contact</a>
    </nav>

    </div>
  )
}

export default Header