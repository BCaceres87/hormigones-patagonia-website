import { useNavigate } from "react-router-dom"
import Contract from '../assets/images/contract.webp'
import styles from './contact-request-section.module.scss'
import Wrapper from "./wrapper"
import { Button } from "antd"

const ContactRequestSection = ({ title, description }) => {
  const navigate = useNavigate()

  return (
    <section className={styles.container}>
      <Wrapper>
        <div className={styles.text_wrapper}>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
          <Button type="primary" onClick={() => navigate('/contact')}>Contáctanos</Button>
        </div>
        <div className={styles.image_wrapper}>
          <img src={Contract} alt="Contract image" />
        </div>
      </Wrapper>
    </section>
  )
}

export default ContactRequestSection
