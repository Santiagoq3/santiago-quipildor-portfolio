import React from 'react'
import { technologies } from '../data/data'
import { CardProjecto } from './CardProjecto'
import { data } from '../data/data'
import "./main.scss"
export const Main = () => {
  return (
    <main className='main'>
        <div className='main__container__name'>
            <h1 className='main__name'>
                Soy Santiago Quipildor
            </h1>
            <p> <span>Fullstack developer e instructor en programacion web</span>. Con 3 años de experiencia trabajando con tecnologias Front-end y Backend-end.</p>
            <div className='main__social'>
              <div>
                <a href='https://www.linkedin.com/in/santiago-quipildorjs/' target="_blank">
                  <img src='./images/linkedin.png' />
                </a>
                <a href='https://github.com/Santiagoq3' target="_blank">
                  <img src='./images/github.png' />
                </a>
              </div>
              <a target={"_blank"} href='https://drive.google.com/file/d/1Kx4EgKkjd7-xuLyDFFOxIdAd5rA1BxZu/view?usp=sharing' className='btn__cv'>
                <img src='./images/Icon.png' />
                Descagar CV
              </a>
            </div>
        </div>
        <div id='portfolio' className='main_projects'>
          <h2 className='main__title-projects'>Latest Projects</h2>
          <ul className='projects'>
            {
              data.map(c => {
                return <CardProjecto c={c} />
              })
            }
            
          </ul>
        </div>
        <div id='aboutme' className='main__about-me'>
          <img className='main__about-me-image' src='./images/fotopersonal.jpeg' />
          <div className='main__about-me-info'>
            <p>Un gusto en conocerte,</p>
            <h2>Soy Santiago</h2>
            <p>Decidi orientar mi carrera como programador al desarrollo web, en mi dia a dia utilizo tecnologias como express, nest js con typescript y en el frontend React js</p>
            <p>Disfruto mucho aprender y enseñar programacion. Mi futuro? estoy muy interesado en seguir aprendiendo arquitectura de software y tambien entrar en el mundo de las aplicaciones moviles.</p>
          </div>
        </div>
        <div className='main__about-me-technologies'>
          <h2>
            My experience includes but not limited
          </h2>
          <ul>
                
                {
                  technologies.map(t=>(
                  <li className='technologie'>
                    
                    {t}
                </li>
                  ))
                }
          </ul>
        </div>
    </main>
  )
}
