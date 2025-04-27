import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/nav-bar'
import styles from './App.module.scss'
import Projects from './pages/projects'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'

function App() {

  return (
   <div className={styles.App}>
     <NavBar/>
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
   </div>
  )
}

export default App
