import React from 'react'

const Subscriptionsection = () => {
    return (
        <div>
            <div className="subcribe-section">
                <div className="container">
                    <div className="row text-center row-margin align-items-center justify-content-center">
                        <div className="col-sm-10 col-md-10 margin-coumns">
                            <strong>Don't Miss Our Update</strong>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-10 col-md-8 margin-coumns">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <span className="input-group-text" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscriptionsection