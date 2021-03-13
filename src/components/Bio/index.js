import React from 'react'
import avatar from '../../assets/images/Avatar.jpeg'

function Bio() {
  return (
    <div className="bio">
      <img id="avatar" src={avatar} alt="Nick Stull" />
      <h2>Nicholas Stull</h2>
      <h2>stull.nicholas@gmail.com</h2>
      <h2>651-706-2205</h2>
      <p>A little about me: I am from St. Paul, MN. Currently living in Hastings, MN. I am a student in the UofM Coding Bootcamp. Alumnus of The University of Montana Western with a BS in Business Administration.</p>        
    </div>
  )
}

export default Bio
