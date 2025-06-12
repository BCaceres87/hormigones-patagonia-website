import AridsBackground from '../assets/images/arids_background.webp'
import PageHeader from '../components/page-header'
import styles from './arids-service.module.scss'
import AridsImage from '../assets/images/arids1.webp'
import Wrapper from '../components/wrapper'
import InfoCell from '../components/info-cell'
import CallIcon from '../assets/icons/call.svg'
import TruckIcon from '../assets/icons/tabler_truck-delivery.svg'
import Constructor from '../assets/icons/mdi_construction-outline.svg'
import ContactRequestSection from '../components/contact-request-section'

const AridsService = () => {
 
  return (
    <>
      <PageHeader
        backgroundImage={AridsBackground}
        title="Nuestros áridos"
        subtitle="Gravilla, arena, estabilizado y más, para satisfacer los requerimientos de tu obra."
      />
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={AridsImage} alt="Áridos" loading="lazy" />
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
      <section className={styles.section2}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h3>
              ¿Cómo adquirir tus áridos con nosotros?
            </h3>
            <div className={styles.steps_wrapper}>
              <InfoCell
                image={TruckIcon}
                title="Despacho rápido en obra"
                description="Llevamos el árido directamente donde lo necesitas, en sacos o a granel."
              />
              <InfoCell
                image={CallIcon}
                title="Asesoría sobre los materiales"
                description="Te ayudamos a elegir el árido adecuado según el uso y la granulometría."
              />
              <InfoCell
                image={Constructor}
                title="Áridos listos para uso inmediato."
                description="Materiales limpios, cribados y con estándar de calidad constante."
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactRequestSection
        title="Solicita tu cotización hoy mismo"
        description="Contáctanos para obtener más información sobre nuestros áridos y servicios de entrega."
      />
    </>
  )
}

export default AridsService
