import slide3 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide1 from '../images/slide-3.jpg'
import '../styles/about.css'

const About = () => {
    const slides = [
        { figure: slide1, },
        { figure: slide2, },
        { figure: slide3, }
    ]
    return (
        <section className="about">
            <div className="slider-wrapper">
                {slides.map(slide =>{
                    return(
                        <img src={slide.figure} alt="" className="slides"/>
                    )
                })}
            </div>
        </section>
    )
}

export default About
