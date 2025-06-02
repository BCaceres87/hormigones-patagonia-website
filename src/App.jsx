import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import styles from './App.module.scss'
import Projects from './pages/projects'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Layout from './components/layout'
import TermsAndConditions from './pages/terms-and-conditions'
import CookiesBanner from './components/cookies-banner'
import CookieSettings from './pages/cookie-settings'
import { ToastContainer } from 'react-toastify'
import ServiceTerms from './pages/service-terms'
import PrivacyPolicy from './pages/privacy-policy'

export const App = () => {
  return (
   <div className={styles.app}>
    <Layout>
      <CookiesBanner/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/cookie-settings" element={<CookieSettings/>}/>
        <Route path="/service-terms" element={<ServiceTerms/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </Layout>
    <ToastContainer />
   </div>
   
  )
}

export default App
