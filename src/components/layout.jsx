import NavBar from './nav-bar'
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
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Layout
