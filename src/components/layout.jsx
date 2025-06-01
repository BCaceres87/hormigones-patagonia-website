import NavBar from './nav-bar'
import Footer from './footer'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <NavBar/>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
