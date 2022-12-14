import React from "react";
import "./Main.css";

export default function Project() {
  return (
    <div id="projects" className="project">
      <p className="PROJt">Projects</p>
      <div class="container">
        <div class="row">
          <div class="col-7">
            <img src="Weather.png" alt="Weather App" width="300" />

            <div>
              <a
                href="https://shimmering-kelpie-e14ec7.netlify.app/"
                alt="Weather app Live"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              |
              <a
                href="https://github.com/yosoytiara/Weather-app"
                alt="Weather app Github"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
          <div class="col-5 projone">
            <h5>Weather App</h5>
            <em>Vanilla JavaScript</em> | Designed + Code
            <ul class="proj">
              <li class="tech">HTML</li>
              <li class="tech">CSS</li>
              <li class="tech">JavaScript</li>
              <li class="tech">API</li>
              <li class="tech">BootStrap</li>
            </ul>
            <p>
              It displays the current date and time. Allows users to search in
              the city in the world or use their current location to display the
              current temperature and forcast.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
            <img src="react.png" alt="React Weather App" width="400" />

            <div>
              <a
                href="https://imaginative-khapse-6ac5b0.netlify.app/"
                alt="Weather app Live"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              |
              <a
                href="https://github.com/yosoytiara/React-Weather-app"
                alt="React Weather app Github"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
          <div class="col-5 projone">
            <h5>ReactWeather App</h5>
            <em>React JavaScript</em> | Designed + Code
            <ul class="proj">
              <li class="tech">HTML</li>
              <li class="tech">CSS</li>
              <li class="tech">React</li>
              <li class="tech">JavaScript</li>
              <li class="tech">API</li>
              <li class="tech">BootStrap</li>
            </ul>
            <p>
              Weather app allows users to search in the city in the world or use
              their current location to display the current temperature and
              forcast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
