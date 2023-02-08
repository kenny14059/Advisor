import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material"


const Footer = () => {
  return (
    <section className="footer">
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">Ovation</span>
          </div>
          <div className="media-icons">
            <a href="#"><FacebookOutlined/> </a>
            <a href="#"><Twitter/>  </a>
            <a href="#"><Instagram/>  </a>
            <a href="#"><LinkedIn/>  </a>
            <a href="#"><YouTube/>  </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#about">about us</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#service">service</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#affiliate">affiliate</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#eadvisor">e-advisor</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#testimonials">testimonials</a></li>
            <li><a data-aos="zoom-in-left" data-aos-delay="300" href="#contact">contact</a></li>
            <li><a href="#">sign up</a></li>
          </ul>
          <div className="mobile-apps">
            <h3>Get our mobile app</h3>
            <div className="store-buttons">
              <a href="#">
                <img src="https://link-to-your-app-on-the-app-store.png" alt="Download on the App Store"/>
              </a>
              <a href="#">
                <img src="https://link-to-your-app-on-google-play.png" alt="Get it on Google Play"/>
              </a>
            </div>
          </div>
  
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email"/></li>
            <li><input type="button" value="Subscribe"/></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2021 <a href="#">Ovation.</a>All rights reserved</span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  </section>
  )
}

export default Footer