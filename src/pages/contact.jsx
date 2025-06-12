import ContactContent from '../components/contact-content'
import Wrapper from '../components/wrapper'
import ContactImage from '../assets/images/contact_background.webp'
import PageHeader from '../components/page-header'
import styles from './contact.module.scss'

const Contact = () => {
  return (
   <>
    <PageHeader 
      backgroundImage={ContactImage}
      title="Estamos aquí para ayudarte"
      subtitle="No dudes en ponerte en contacto con nosotros para cualquier consulta o solicitud de materiales."
    />
    <section className={styles.section1}>
      <div>
        <Wrapper>
          <ContactContent/>
        </Wrapper>
      </div>
    </section>
   </>
  )
}

export default Contact
