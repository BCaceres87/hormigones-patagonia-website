import { useState, useEffect } from "react";
import HormigonImage from '../assets/images/hormigon1.webp'
import PageHeader from '../components/page-header'
import Wrapper from '../components/wrapper'
import styles from './hormigon-service.module.scss'
import Concrete from '../assets/images/concrete.webp'
import InfoCell from '../components/info-cell'
import CallIcon from '../assets/icons/call.svg'
import TruckIcon from '../assets/icons/tabler_truck-delivery.svg'
import Constructor from '../assets/icons/mdi_construction-outline.svg'
import ContactRequestSection from '../components/contact-request-section'

const HormigonService = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = HormigonImage;
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
        backgroundImage={HormigonImage}
        title="Hormigón de calidad"
        subtitle="Ofrecemos hormigón premezclado de alta calidad, ideal para todos tus proyectos de construcción."
      />
      <section className={styles.section1} style={!bgLoaded ? {visibility: 'hidden'} : {}}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={Concrete} alt="Hormigon image" loading="lazy" />
          </div>
          <div className={styles.text_wrapper}>
            <h3>
              Características del Hormigón Premezclado: Resistencia, Durabilidad y Calidad
            </h3>
            <p>
              Nuestro hormigón premezclado se destaca por su alta resistencia y durabilidad. Ideal para todo tipo de proyectos de construcción, garantiza resultados óptimos y duraderos.
            </p>
            <div className={styles.text_box}>
              <div>
                <h5>Resistencia</h5>
                <span>
                  Ofrecemos hormigón con resistencia a compresión que supera los estándares del mercado.
                </span>
              </div>
              <div>
                <h5>Durabilidad</h5>
                <span>
                  Nuestro hormigón es resistente a condiciones climáticas adversas y al desgaste.
                </span>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className={styles.section2} style={!bgLoaded ? {visibility: 'hidden'} : {}}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h3>
              ¿Cómo adquirir tu hormigón con nosotros?
            </h3>
            <div className={styles.steps_wrapper}>
              <InfoCell
                image={TruckIcon}
                title="Despacho rápido en obra"
                description="Llevamos el hormigón directamente donde lo necesitas, en el formato que requieras."
              />
              <InfoCell
                image={CallIcon}
                title="Asesoría técnica personalizada"
                description="Te ayudamos a elegir el tipo de hormigón y la resistencia adecuada."
              />
              <InfoCell
                image={Constructor}
                title="Hormigón listo para uso inmediato."
                description="Materiales de calidad, mezclados y listos para tu proyecto."
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactRequestSection
        title="Solicita tu cotización hoy mismo"
        description="Contáctanos para obtener más información sobre nuestros hormigones y servicios de entrega."
      />
    </>
  )
}

export default HormigonService
