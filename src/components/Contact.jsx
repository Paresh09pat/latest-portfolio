import React from 'react'


function Contact() {
  return (
    <>
      <h4 className='contact'>Contact Me : +91 8007988089</h4>
      <h4 className='contact'>Mail Me : patilpareshbaluchopda@gmail.com</h4>

      <h2 className='contact1'>Follow Me On</h2>
      <div className='follow'>
        <a target='_blank' className='goto' href='https://www.linkedin.com/in/paresh-patil-6bb7231a3/'>
          <img className='logoimg' src='https://th.bing.com/th/id/OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
          <span>LinkedIn</span>
        </a>
      </div>
      
      <div className='follow'>
        <a target='_blank' className='goto' href='https://www.instagram.com/pareshpatil2411/'>
          <img className='logoimg'  src='https://th.bing.com/th/id/OIP.OaA1UyS1Zq3dW4ztbuK9EgHaHW?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
          <span>Instagram</span>
        </a>
      </div>
      
      <div className='follow'>
        <a className='goto' target='_blank' href='https://www.facebook.com/paresh.patil.71697/'>
          <img className='logoimg'  src='https://th.bing.com/th/id/OIP.b0WkUDI4ZGrfvAylx7ShHwAAAA?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
          <span>Facebook</span>
        </a>
      </div>


      <h2 className='contact1'>See My Work</h2>
      <div className='follow'>
        <a target='_blank' className='goto' href='https://github.com/Paresh09pat'>
          <img className='logoimg' src='https://th.bing.com/th/id/OIP.05b5BHN45Y0ljD4nIDxD8AHaEK?pid=ImgDet&rs=1' alt='' />
          <span>Github</span>
        </a>
      </div>
      
      <div className='follow'>
        <a target='_blank' className='goto' href='https://app.netlify.com/teams/paresh09pat-37o85pk/overview?_ga=2.128414284.1316469874.1675183758-585742277.1675183757'>
          <img className='logoimg'  src='https://yt3.ggpht.com/a-/AAuE7mDZjap8ZHGuyLrZ4OLooiWll3A8aZvY59PpiQ=s900-mo-c-c0xffffffff-rj-k-no' alt='' />
          <span>Netlify</span>
        </a>
      </div>


    </>
  )
}

export default Contact