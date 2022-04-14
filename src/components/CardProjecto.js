import React from 'react'
import "./cardproject.scss"
export const CardProjecto = () => {
  return (
    
    <li className='cardproject' >
         <img className='cardproject__img' src='./images/image2.png' />
         <div className='cardproject__info'>
            <h3 className='cardproject__info-name-project'>Ecommerce Mobile App</h3>
            <ul className='cardproject__info-technologies'>
                <li>
                    HTML
                </li>
            </ul>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='cardproject__info-actions'>
                <button className='btn__cv'>
                    Code
                </button>
                <button className='btn__cv'>
                    Demo
                </button>
            </div>
         </div>
    </li>
    
  )
}
