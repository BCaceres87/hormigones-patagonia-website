import ContactContent from '../components/contact-content'
import Wrapper from '../components/wrapper'
import styles from './contact.module.scss'

const Contact = () => {
  return (
   <>
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.text_wrapper}>
          <h1>Estamos aquí para ayudarte</h1>
          <p>No dudes en ponerte en contacto con nosotros para cualquier consulta o solicitud de materiales.</p>
        </div>
      </Wrapper>
    </header>
    <section>
      <div className={styles.content}>
        <Wrapper>
          <ContactContent/>
        </Wrapper>
      </div>
    </section>
   </>
  )
}

export default Contact
