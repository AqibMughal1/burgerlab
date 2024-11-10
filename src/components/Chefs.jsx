import React from "react";

const Chefs = () => {
    return (
        <div>

            <div className="chef">
                <div className="container container-margin">
                    <div className="row justify-content-center text-center ">
                        <div className="col-sm-10 col-md-6">
                            <h2 className="h2">Our Chef</h2>
                            <p className="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum vestibulum.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center align-items-center">
                        <div className="col-sm-10 col-md-3 margin-coumns">
                            <div className="cards">
                                <img src="images/pic1.jpg" alt="Chef Aiden Hunter" />
                                <h3>Aiden Hunter</h3>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-3 margin-coumns">
                            <div className="cards">
                                <img src="images/pic2.jpg" alt="Chef Ethel Ramsey" />
                                <h3>Ethel Ramsey</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-3 margin-coumns">
                            <div className="cards">
                                <img src="images/pic3.jpg" alt="Chef Fannie Stewart" />
                                <h3>Fannie Stewart</h3>
                                <p>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chefs;
