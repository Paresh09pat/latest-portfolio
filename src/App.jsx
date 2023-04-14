import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Skills' element={<Skill />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
