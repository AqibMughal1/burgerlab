import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="position-absolute">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="images/logo.png" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Promo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="main">
          <div className="banner">
            <div className="gradient" />
            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-md-6 ">
                  <h1 className="h1">Get Cash Back Upto 50%</h1>
                  <p className="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consectetur justo eu nunc consequat.
                  </p>
                  <button type="button" className="btn button1">
                    Order Now
                  </button>
                </div>
                <div className="col-sm-10 col-md-6" />
              </div>
            </div>
          </div>
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
          <footer className="footer">
            <p>Created by you</p>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
