import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>MOVIE NAME</h1>
        </div>
        <div className="bannerbutton">
            <button className='button'>PLAY</button>
            <button className='button'>MY LIST</button>
        </div>
        <h1 className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
        <div className="fade"></div>
    </div>
  )
}

export default Banner