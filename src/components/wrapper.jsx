import styles from './wrapper.module.scss'

const Wrapper = ({children}) => {
  return (
    <div className={styles.container}>
      {children}      
    </div>
  )
}

export default Wrapper
