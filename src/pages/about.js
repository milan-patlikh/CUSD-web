import * as React from "react"
import "../components/about/about.scss"
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import Overview from '../components/about/overview.js'
import abouthead from '../images/background_images/peoplepurposefront.png'
import aboutmid1 from '../images/background_images/cusdwind.jpg'
import aboutmid2 from '../images/background_images/cusdstickers.png'
import Connectwithus from '../components/footer/connectwithus'
import Footer from '../components/footer/footer.js'
import Values from '../components/about/values.js'
import ValuePicture from "../images/aboutimg/values.png"


const AboutPage = () => {
    return (

        <main>
            <Nav />
            <Parallax image={abouthead} caption={"About"} height={550}> </Parallax>
            <Overview />
            <Parallax image={aboutmid1} height={200}> </Parallax>
            <Values image={ValuePicture}> </Values>
            <Parallax image={aboutmid2} height={200}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
export default AboutPage