import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import styles from './contact-content.module.scss'
import ContactForm from './contact-form'

const ContactContent = () => {
  return (
    <div className={styles.content_wrapper}>
      <div>
        <span>
          Cotiza con nosotros
        </span>
        <h2>
          Contáctanos
        </h2>
        <p>Estamos aquí para ayudarte</p>
        <span className={styles.data_text}><MailOutlined /> constructorahbspa@gmail.com</span>
        <span className={styles.data_text}><PhoneOutlined /> +56 9 6628 3243</span>
        <span className={styles.data_text}><EnvironmentOutlined /> Monte verde 0108, Valdivia, Chile</span>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactContent
