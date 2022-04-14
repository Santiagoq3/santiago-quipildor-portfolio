import React from 'react'
import { CardProjecto } from './CardProjecto'
import "./main.scss"
export const Main = () => {
  return (
    <main className='main'>
        <div className='main__container__name'>
            <h1 className='main__name'>
                Soy Santiago Quipildor
            </h1>
            <p> <span>Frontend Developer and Designer</span>. I learn and teach everything about Web Technologies and Product Design.</p>
            <div className='main__social'>
              <div>
                <a href='https://www.linkedin.com/in/santiago-quipildorjs/' target="_blank">
                  <img src='./images/linkedin.png' />
                </a>
                <a href='https://github.com/Santiagoq3' target="_blank">
                  <img src='./images/github.png' />
                </a>
              </div>
              <button className='btn__cv'>
                <img src='./images/Icon.png' />
                Descagar CV
              </button>
            </div>
        </div>
        <h2 className='main__title-projects'>Latest Projects</h2>
        <div className='main_projects'>
          <ul className='projects'>
            <CardProjecto />
            <CardProjecto />
            <CardProjecto />
          </ul>
        </div>
        <div className='main__about-me'>
          <img className='main__about-me-image' src='./images/avatar2.png' />
          <div className='main__about-me-info'>
            <p>Un gusto en conocerte,</p>
            <h2>Soy Santiago</h2>
            <p>Working full time in Angular, Typescript and SCSS, leading the team for revamping DotCMS administration system.</p>
            <p>Code</p>
            <p>Frontend is my true passion and I really enjoy the whole process of creating UIs, from the first brainstorming, wireframes, mockups, design, all the way until the final product.</p>
          </div>
        </div>
    </main>
  )
}
