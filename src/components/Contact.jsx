import { Email, Phone, Room } from "@mui/icons-material"


const Contact = () => {
  return (
    <section className="contact" id="contact">
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
             <Room/>
            <div className="topic">Address</div>
            <div className="text-one">Bonn_arts, NP12</div>
            <div className="text-two">Bonn, 06</div>
          </div>
          <div className="phone details">
            <Phone/>
            <div className="topic">Phone</div>
            <div className="text-one">+254 9893 5647</div>
            <div className="text-two">+254 3434 5678</div>
          </div>
          <div className="email details">
            <Email/>
            <div className="topic">Email</div>
            <div className="text-one">oyugabonface@gmail</div>
            <div className="text-two">oyugabonface8@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email"/>
          </div>
          <div className="input-box message-box">
            
          </div>
          <div className="button">
            <button>Send Now</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Contact