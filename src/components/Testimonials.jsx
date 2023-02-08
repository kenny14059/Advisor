import { PersonOutline } from "@mui/icons-material"

const Testimonials = () => {
  return (
<section className="testimonials" id="testimonials">
    <div className="container">
      <h1>Testimonials</h1>
      <div className="row">
          <div className="col-lg-4">
              <div className="card">
                  <div className="face front-face">
                      <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                          alt="" className="profile"/>
                      <div className="pt-3 text-uppercase name">
                          Robert Garrison
                      </div>
                      <div className="designation">Android Developer</div>
                  </div>
                  <div className="face back-face">
                      <span classNameName="left"><PersonOutline/></span>
                      <div className="testimonial">
                          I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                          pleasant.
                          The service was execellent. I will refer everyone I know.
                      </div>
                      <span >
                      <PersonOutline/>
                      </span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="card">
                  <div className="face front-face">
                      <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          alt="" className="profile" />
                      <div className="pt-3 text-uppercase name">
                          Jeffery Kennan
                      </div>
                      <div className="designation">Full Stack Developer</div>
                  </div>
                  <div className="face back-face">
                      <span className="left"><PersonOutline/></span>
                      <div className="testimonial">
                          Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                          man, this thing is getting better and better as I learn more about it.
                      </div>
                      <span ><PersonOutline/></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </section>
  )
}

export default Testimonials