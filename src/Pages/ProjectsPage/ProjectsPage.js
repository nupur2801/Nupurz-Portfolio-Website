import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../../DataPage';
import './ProjectsPage.css'
const ProjectsPage = () => {
  return (
    <div className='work-maincontainer'>
      <div className='work-container'>
        <div className='work-heading'>
          <h1>MY<span className='work-span-heading'> PORTFOLIO</span></h1>
          <span className='work-background-heading'> WORKS</span>

        </div>
        <div className='myportfolio-container'>
          {
            Data.map((item) => {
              return (
                <a className='project-container' href={item.link}>
                  <img className='card-image' src={item.image} />
                  <div className='card-name'>
                    <h1>{item.Name}</h1>
                  </div>
                </a>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default ProjectsPage