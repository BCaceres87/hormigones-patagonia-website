import { useState, useEffect } from "react";
import ContactContent from '../components/contact-content'
import Wrapper from '../components/wrapper'
import ContactImage from '../assets/images/contact_background.webp'
import PageHeader from '../components/page-header'
import styles from './contact.module.scss'

const Contact = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = '/src/assets/images/contact_background.webp';
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
   <>
    <PageHeader 
      backgroundImage={ContactImage}
      title="Estamos aquí para ayudarte"
      subtitle="No dudes en ponerte en contacto con nosotros para cualquier consulta o solicitud de materiales."
    />
    <section className={styles.section1 + (!bgLoaded ? ' ' + styles.skeleton : '')}>
      {!bgLoaded && (
        <div className={styles.bgSkeleton}>
          <div className={styles.bgSkeleton__spinner}></div>
          <span>Preparando tu experiencia...</span>
        </div>
      )}
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
