import coverImg from '../images/home-cover-img.png'
import '../styles/index.css'


const Index = () => {
    return (
        <section>
            <div className="index">

                <div className="img-col">

                    <img src={coverImg} alt="" className="figure" />
                </div>

                <div className="title-col">
                    <h1 className="title">
                        lorem ipsum is placeholder 
                        <span className="red-text"> text commonly used in the graphic, print, </span>
                        and publishing industries for previewing
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Index
