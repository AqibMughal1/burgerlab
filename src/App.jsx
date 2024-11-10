import React from "react"
import Banner from "./components/banner"
import Chefs from "./components/chefs"
import Header from "./components/Header"
import StatsPackages from "./components/StatsPackages"
import Berrysection from "./components/Berrysection"
import Subscriptionsection from "./components/Subscriptionsection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Banner />
          <Chefs />
          <StatsPackages />
          <Berrysection />
          <Subscriptionsection />
          <Footer />

        </main>
      </div>
    </>
  )
}

export default App
