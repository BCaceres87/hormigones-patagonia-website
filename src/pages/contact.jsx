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
    img.src = ContactImage;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
   <>
    <div className={styles.skeleton + (!bgLoaded ? ' ' + styles.skeleton : '')} style={!bgLoaded ? {position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10000} : {display: 'none'}}>
      {!bgLoaded && (
        <div className={styles.bgSkeleton}>
          <div className={styles.bgSkeleton__spinner}></div>
          <span>Preparando tu experiencia...</span>
        </div>
      )}
    </div>
    <PageHeader 
      backgroundImage={ContactImage}
      title="Estamos aquí para ayudarte"
      subtitle="No dudes en ponerte en contacto con nosotros para cualquier consulta o solicitud de materiales."
    />
    <section className={styles.section1} style={!bgLoaded ? {visibility: 'hidden'} : {}}>
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
