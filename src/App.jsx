import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import styles from './App.module.scss'
import Projects from './pages/projects'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Layout from './components/layout'

export const App = () => {
  return (
   <div className={styles.app}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Layout>
   </div>
  )
}

export default App
