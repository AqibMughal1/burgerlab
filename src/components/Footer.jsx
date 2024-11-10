import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 margin-coumns">
                            <h6 className="">
                                Title Here
                                <span />
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                                dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
                                dignissim enim.
                            </p>
                            <ul className="title-ul">
                                <li className="title-li">
                                    <a href="#">
                                        <i className="fab fa-instagram title-i" aria-hidden="true" />
                                    </a>
                                </li>
                                <li className="title-li">
                                    <a href="#">
                                        <i className="fab fa-facebook title-i" aria-hidden="true" />
                                    </a>
                                </li>
                                <li className="title-li">
                                    <a href="#">
                                        <i className="fab fa-twitter title-i" aria-hidden="true" />
                                    </a>
                                </li>
                                <li className="title-li">
                                    <a href="#">
                                        <i className="fab fa-whatsapp title-i" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2 margin-coumns">
                            <h6>About</h6>
                            <ul className="about-ul">
                                <li><a className="about-a" href="#">History</a></li>
                                <li><a className="about-a" href="#">Our Team</a></li>
                                <li><a className="about-a" href="#">Brand Guidelines</a></li>
                                <li><a className="about-a" href="#">Terms & Conditions</a></li>
                                <li><a className="about-a" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2 margin-coumns">
                            <h6>Services</h6>
                            <ul className="about-ul">
                                <li><a className="about-a" href="#">How to Order</a></li>
                                <li><a className="about-a" href="#">Our Product</a></li>
                                <li><a className="about-a" href="#">Order Status</a></li>
                                <li><a className="about-a" href="#">Promo</a></li>
                                <li><a className="about-a" href="#">Payment Method</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2 margin-coumns">
                            <h6>Other</h6>
                            <ul className="about-ul">
                                <li><a className="about-a" href="#">Contact Us</a></li>
                                <li><a className="about-a" href="#">Help Us</a></li>
                                <li><a className="about-a" href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer