
import  Carousel  from '../Carousel'

import { useEffect,
   useState,
    
   } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'


import './index.scss'




const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
         <div>
          <Carousel />
          
         </div>
         


        </div>
        
       
       
        
    

         
  
       
      </div>

      <Loader type="line-scale" />
    </>
  )
}

export default Skills
