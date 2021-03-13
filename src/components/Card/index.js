import React from 'react'
import movieIQ from '../../assets/images/MovieIQ-app.jpeg'
import scheduler from '../../assets/images/scheduler-app.jpeg'
import weatherApp from '../../assets/images/weather-app.jpeg'

function Card() {
  return (
    <>
      <div className="card">
        <img className="project-img" src={movieIQ} alt="MovieIQ app" />
        <div className="card-info">
            <a href="https://nickstull.github.io/Movie-Guessing-Game/" target="_blank">
                <h2>MovieIQ App</h2>
            </a>
            <p>The MovieIQ app is a web game developed to provide the user fun movie trivia using a sleek, responsive design.</p>
            <a href="https://github.com/NickStull/Movie-Guessing-Game" target="_blank">&gt;Github Repository&lt;</a>
        </div>
      </div>
      <div class="card">
          <img class="project-img" src={weatherApp} alt="photo of weather app" />
          <div class="card-info">
              <a href="https://nickstull.github.io/weather-dashboard/" target="_blank">
                  <h2>Weather Dashboard</h2>
              </a>
              <p>The Weather Dashboard is a minimalist app that gives the current weather and 5 day forecast for any user-given location.</p>
              <a href="https://github.com/NickStull/weather-dashboard" target="_blank">&gt;Github Repository&lt;</a>
          </div>
      </div>
      <div class="card">
          <img class="project-img" src={scheduler} alt="photo of scheduler app" />
          <div class="card-info">
              <a href="https://nickstull.github.io/work-day-scheduler/" target="_blank">
                  <h2>Work Day Scheduler</h2>
              </a>
              <p>The Work Day Scheduler is a quick and easy, responsive app for scheduling out your day during normal business hours.</p>
              <a href="https://github.com/NickStull/work-day-scheduler" target="_blank">&gt;Github Repository&lt;</a>
          </div>
      </div>          
    </>
  )
}

export default Card
