import ContactContent from '../components/contact-content'
import Wrapper from '../components/wrapper'
import ContactImage from '../assets/images/contact_background.jpeg'
import PageHeader from '../components/page-header'

const Contact = () => {
  return (
   <>
    <PageHeader 
      backgroundImage={ContactImage}
      title="Estamos aquí para ayudarte"
      subtitle="No dudes en ponerte en contacto con nosotros para cualquier consulta o solicitud de materiales."
    />
    <section>
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
