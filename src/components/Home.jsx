import React from 'react'
import './Comp.css'

function Home() {
  return (
    <>
      <h1 id='myname'>
        <span className='let1'>P</span>
        <span className='let2'>a</span>
        <span className='let3'>r</span>
        <span className='let4'>e</span>
        <span className='let5'>s</span>
        <span className='let6'>h</span>

        <span className='let7'>P</span>
        <span className='let8'>a</span>
        <span className='let9'>t</span>
        <span className='let10'>i</span>
        <span className='let11'>l</span>
      </h1>

      <div className='search'>
        <input className='inputfield' type='text' placeholder=' Search Google or type URL'></input>
        <button className='but' type='submit'>Search</button>
      </div>


    </>
  )

}

export default Home