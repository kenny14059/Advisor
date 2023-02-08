import styled from "styled-components"
import About from "../components/About"
import Contact from "../components/Contact"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Service from "../components/Service"
import Skills from "../components/Skills"
import Testimonials from "../components/Testimonials"


const Home = () => {
  return (
    <div>
        <Header/>
        <Content/>
        <About/>
        <Service/>
        <Skills/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home