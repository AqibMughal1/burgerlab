import React from 'react'

function Burgers() {
    return (
        <div>
            <div className="best-burger">
                <div className="container">
                    <div className="row align-items-center justify-space-evenly">
                        <div className="col-sm-10 col-md-6 burger padding-divs">
                            <div className="img-div">
                                <img className="img-div-image" src="images/burger.jpg" alt="Best Burger" />
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-6 margin-coumns burger">
                            <h4>Best Burger</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum vestibulum.
                            </p>
                            <button type="button" className="btn">
                                ORDER NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="big-burger">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-10 col-md-6 margin-coumns">
                            <h4>Big Burger</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum vestibulum.
                            </p>
                            <button>ORDER NOW</button>
                        </div>
                        <div className="col-sm-10 col-md-6 margin-coumns">
                            <div className="img-div">
                                <img
                                    className="img-div-image"
                                    src="images/bigburger.jpg"
                                    alt="Big Burger"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burgers