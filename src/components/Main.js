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
          </ul>
        </div>
    </main>
  )
}
