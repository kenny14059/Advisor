import { Brush, CloudDone, Construction, Gavel, LocalShipping, Power } from "@mui/icons-material"

const Service = () => {
  return (
    <section id="service">
    <div className="row service" >
      <h2 className="section-heading">Our Services</h2>
    </div>
    <div className="row">
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
            <Gavel className="icon" />
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
           <Brush className="icon"/>
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
          <Construction className="icon"/>
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
          <LocalShipping className="icon"/>
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
          <CloudDone className="icon"/>
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="icon-wrapper">
            <Power className="icon"/>
          </div>
          <h3>Service Heading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Service