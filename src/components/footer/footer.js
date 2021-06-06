import './footer.css'
import './search-btn.css'
import './icons-style.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="social-icons-col">
                    <ul class="icon-list">
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-twitter"></i></a>
                        </li>

                    </ul>

                </div>

                <div className="search-location-col">

                    <div>
                        <p className="title">location</p>
                        <div className="d-flex">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    placeholder="choose location"
                                    className="input-field"
                                    disabled />
                                <button type="button" className="pick-location-btn cursor-pointer">pick location</button>
                            </div>

                            {/* <button
                                type="button"
                                className="btn cursor-pointer"
                            >search</button> */}
                            <div class="center">
                                <button class="fancy">
                                    <span class="top-key"></span>
                                    <a href="#" target="_blank" class="">search</a>
                                    <span class="bottom-key-1"></span>
                                    <span class="bottom-key-2"></span>
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
