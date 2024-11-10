import React from 'react'

const StatsPackages = () => {
    return (
        <div>
            <div className="statistics">
                <div className="container">
                    <div className="row text-center justify-content-center row-mb">
                        <div className="col-sm-10 col-md-6 margin-coumns">
                            <h5>Statistics</h5>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum vestibulum.
                            </small>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center align-items-center">
                        <div className="col-sm-10 col-md-4 margin-coumns">
                            <div className="stats-div">
                                <b>7K</b>
                                <small>Customers</small>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-4 margin-coumns">
                            <div className="stats-div">
                                <b>109</b>
                                <small>Outlets</small>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-4 margin-coumns">
                            <div className="stats-div">
                                <b>35</b>
                                <small>Country</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular">
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center popular-row">
                        <div className="col-sm-10 col-md-6 margin-coumns">
                            <b className="b1">Popular Packages</b>
                        </div>
                    </div>
                    <div className="row text-center justify-content-around align-items-center">
                        <div className="pack col-sm-10 col-md-4 bg-light margin-coumns">
                            <b>Package I</b>
                            <div>
                                <img src="images/burger-icon.png" alt="Burger Icon" />
                            </div>
                            <small>$10.00</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button type="button" className="">
                                Order Now
                            </button>
                        </div>
                        <div className="pack col-sm-10 col-md-4 bg-light margin-coumns">
                            <b>Package I</b>
                            <div>
                                <img src="images/burger-icon.png" alt="Burger Icon" />
                            </div>
                            <small>$10.00</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button type="button" className="">
                                Order Now
                            </button>
                        </div>
                        <div className="pack col-sm-10 col-md-4 bg-light margin-coumns">
                            <b>Package I</b>
                            <div>
                                <img src="images/burger-icon.png" alt="Burger Icon" />
                            </div>
                            <small>$10.00</small>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button type="button" className="">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsPackages