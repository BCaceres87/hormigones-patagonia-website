import styles from './page-header.module.scss'
import Wrapper from './wrapper'

const PageHeader = ({backgroundImage, title, subtitle}) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Wrapper>
        <div className={styles.text_wrapper}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </Wrapper>
    </header>
  )
}

export default PageHeader
