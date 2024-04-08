import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
                Find Real Estate & Get Your Dream Place
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora expedita culpa iure beatae quia impedit voluptas adipisci iusto dicta! Accusantium perferendis aspernatur cumque, earum esse eos blanditiis accusamus, tempore necessitatibus facilis sequi assumenda.
            </p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gain</h2>
                </div><div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage