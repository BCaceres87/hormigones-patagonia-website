import styles from './info-cell.module.scss'

const InfoCell = ({ image, title, description}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Step icon" loading="lazy"/>
      <h5>
        {title}
      </h5>
      <p>
        {description}
      </p>
    </div>
  )
}

export default InfoCell
