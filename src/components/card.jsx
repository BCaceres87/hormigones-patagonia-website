import { Link } from 'react-router-dom'
import styles from './card.module.scss'
import { RightOutlined } from "@ant-design/icons"

const Card = ({image, title, description, linkText, path}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <img src={image} alt="image1" />
      </div>
      <div className={styles.text_wrapper}>
        <h5>{title}</h5>
        <span>{description}</span>
        {path && linkText && (
            <Link to={path}>{linkText} <RightOutlined /></Link>
          )
        }
      </div>
    </div>
  )
}

export default Card
