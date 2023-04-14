import React from 'react'
import './Comp.css'

function Skill() {
  return (
    <>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div className="carousel-inner" id='carousel' >
          <div className="carousel-item active">
            <div className='cardtech1'>
              <h1 className='cardhead'>Frontend</h1>
              <p>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://www.pinclipart.com/picdir/middle/10-106437_wikipedia-the-free-encyclopedia-html-5-clipart.png' alt='' />
                  <span className='techname'>HTML</span>
                </a>
              </p>

              <p>
                <a href='https://react.dev/' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
                  <span className='techname'>REACT</span>
                </a>
              </p>

              <p>
                <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS' className='techdiv'>
                  <img className='logoes' src='https://th.bing.com/th/id/R.b7c2e508920a1168b94dea8675fa311d?rik=OrKWiP1KjSmTXg&riu=http%3a%2f%2fblog.brakoniecki.pl%2fwp-content%2fuploads%2f2015%2f02%2fcss-logo.png&ehk=fTRhrOcV1pmRkABaHeXyXpLjC4%2bNfbXaiYPz16Ageoc%3d&risl=&pid=ImgRaw&r=0' alt='' />
                  <span className='techname'>CSS</span>
                </a>
              </p>

              <p>
                <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/javascript' className='techdiv'>
                  <img className='logoes' src='https://th.bing.com/th/id/OIP.Hf1fzVhQli-QEEdHhyDydwHaIr?w=139&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
                  <span className='techname'>JAVASCRIPT</span>
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className='cardtech1'>
              <h1 className='cardhead'>Backend</h1>
              <p>
                <a href='https://nodejs.org/en/docs' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://th.bing.com/th/id/OIP.y1n0BzYboF0eWjU2GqM20QHaHa?pid=ImgDet&w=600&h=600&rs=1' alt='' />
                  <span className='techname'>Node JS</span>
                </a>
              </p>

              <p>
                <a href='https://expressjs.com/en/5x/api.html' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://th.bing.com/th/id/R.dacbed52b1002461ee87f771fecb0064?rik=O5OXLzTxL5v1Vg&riu=http%3a%2f%2faddonwebsolutions.com%2fwp-content%2fuploads%2f2018%2f09%2fexpressjs.png&ehk=SYW7aA8IgmX4eEjE6LiX7hZ9ekEmGi9ZUWojwunVId0%3d&risl=&pid=ImgRaw&r=0' alt='' />
                  <span className='techname'>Express JS</span>
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className='cardtech1'>
              <h1 className='cardhead'>Database</h1>
              <p>
                <a href='https://www.mongodb.com/docs/' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://secureservercdn.net/160.153.137.14/fad.0cb.myftpupload.com/wp-content/uploads/2021/03/MongoDB.jpg' alt='' />
                  <span className='techname'>MongoDB</span>
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className='cardtech1'>
              <h1 className='cardhead'>Web Development Tools</h1>

              <p>
                <a href='https://docs.github.com/en' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://th.bing.com/th/id/OIP.05b5BHN45Y0ljD4nIDxD8AHaEK?pid=ImgDet&rs=1' alt='' />
                  <span className='techname'>Github</span>
                </a>
              </p>

              <p>
                <a href='https://redux-toolkit.js.org/introduction/getting-started' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1' alt='' />
                  <span className='techname'>Redux Toolkit</span>
                </a>
              </p>

              <p>
                <a href='https://git-scm.com/doc' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://miro.medium.com/max/910/1*Wjxx83j-qyiNvFBy1yOA1w.jpeg' alt='' />
                  <span className='techname'>Git</span>
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className='cardtech1'>
              <h1 className='cardhead'>Cloud Services</h1>
              <p>
                <a href='https://docs.cyclic.sh/' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://i0.wp.com/www.cyclic-bikestore.com/wp-content/uploads/2016/11/Cyclic-Logo.png?ssl=1' alt='' />
                  <span className='techname'>Cyclic</span>
                </a>
              </p>

              <p>
                <a href='https://docs.netlify.com/' target='_blank' className='techdiv'>
                  <img className='logoes' src='https://www.opensourceforu.com/wp-content/uploads/2018/01/netlify_logo.jpg' alt='' />
                  <span className='techname'>Netlify</span>
                </a>
              </p>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Skill