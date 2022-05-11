import React from 'react'
import { data } from '../data/data'
import "./cardproject.scss"


export const CardProjecto = ({c}) => {
    console.log(c)
  return (
    
    <li className='cardproject' >
     
                <img className='cardproject__img' src={c.img} />
                <div className='cardproject__info'>
                    <h3 className='cardproject__info-name-project'>{c.name}</h3>
                    <ul className='cardproject__info-technologies'>
                        {
                            c.technologies.map(t =>{
                              return  <li className='technologie'>
                                    {t}
                                </li>
                            })
                        }
                    </ul>
                    <p>
                        {c.description}
                    </p>
                    <div className='cardproject__info-actions'>
                        <a target={'_blank'} href={c.codelink} className='btn__cv'>
                            <img src='./images/code.png' />
                            Code
                        </a>
                        <a target={'_blank'} href={c.demolink} className='btn__cv'>
                            <img src='./images/demo.png' />
                            Demo
                        </a>
                    </div>
                </div>
                
         
    </li>
    
  )
}
