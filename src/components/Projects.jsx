import React from 'react'
import todo from './Image/todoapp.png'
import blog from './Image/blog.png'
import clock from './Image/clock.png'
import Ecommerce from './Image/Ecommerce.png'
import hotstar from './Image/hotstar.png'

function Projects() {
  return (
    <>
      <h1 className='headproject'>  My Projects</h1>
      <div id='maincarddiv'>
        <div className='card'>
          <img className='cardimage' src={todo} alt=''/>
          <p className='projectname'> TODO App using HTML, CSS & Javascript</p>
          <a className='projectlink' target='_blank' href='https://paresh09pat.github.io/TodoAppJS/'> Click to see live Demo </a>
        </div>
        
        <div className='card'>
        <img className='cardimage' src={clock} alt=''/>
          <p className='projectname'>Digital Clock using HTML, CSS & Javascript </p>
          <a className='projectlink' target='_blank' href='https://paresh09pat.github.io/digitalclock/'> Click to see live Demo </a>
        </div>
        
        <div className='card'>
        <img className='cardimage' src={clock} alt=''/>
          <p className='projectname'> Portfolio </p>
          <a className='projectlink' target='_blank' href='https://paresh09pat.github.io/digitalclock/'> Click to see live Demo </a>
        </div>
        
        <div className='card'>
        <img className='cardimage' src={blog} alt=''/>
          <p className='projectname'>Blog Project Using HTML, CSS, Javascript & React</p>
          <a className='projectlink' target='_blank' href='https://paresh-blog-project.netlify.app/'> Click to see live Demo </a>
        </div>
        
        <div className='card'>
        <img className='cardimage' src={hotstar} alt=''/>
          <p className='projectname'>Hotstar Clone Using HTML, CSS, Javascript & React</p>
          <a className='projectlink' target='_blank' href='https://hotstar-ass.netlify.app/'> Click to see live Demo </a>
        </div>
        
        <div className='card'>
        <img className='cardimage' src={Ecommerce} alt=''/>
          <p className='projectname'> Ecommerce App Using HTML, CSS, JS, React, Nodejs, MongoDB</p>
          <a className='projectlink' target='_blank' href='https://paresh-ecommerce-project.netlify.app/'> Click to see live Demo </a>
        </div>
      </div>

    </>
  )
}

export default Projects