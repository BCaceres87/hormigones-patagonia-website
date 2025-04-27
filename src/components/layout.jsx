import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      {children}
    </main>
  )
}

export default Layout
