import HormigonImage from '../assets/images/hormigon1.jpg'
import PageHeader from '../components/page-header'
import Wrapper from '../components/wrapper'
import styles from './hormigon-service.module.scss'
import Concrete from '../assets/images/concrete.jpg'
import InfoCell from '../components/info-cell'
import CallIcon from '../assets/icons/call.svg'
import TruckIcon from '../assets/icons/tabler_truck-delivery.svg'
import Constructor from '../assets/icons/mdi_construction-outline.svg'
import ContactRequestSection from '../components/contact-request-section'

const HormigonService = () => {

  return (
    
    <>
      <PageHeader
        backgroundImage={HormigonImage}
        title="Hormigón de calidad"
        subtitle="Ofrecemos hormigón premezclado de alta calidad, ideal para todos tus proyectos de construcción."
      />
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={Concrete} alt="Hormigon image" />
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
              Descubre cómo realizar tu pedido de hormigón premezclado de manera sencilla.
            </h3>
            <div className={styles.steps_wrapper}>
              <InfoCell
                image={TruckIcon}
                title="Proceso de entrega eficiente y uso del hormigón en tu proyecto."
                description="Realizar un pedido de hormigón premezclado es fácil y rápido."
              />
              <InfoCell
                image={CallIcon}
                title="Desde tu pedido hasta la entrega, te acompañamos en cada paso."
                description="Nuestro equipo se asegura de que recibas el hormigón en el momento adecuado."
              />
              <InfoCell
                image={Constructor}
                title="Utiliza el hormigón premezclado para construir con calidad y durabilidad."
                description="Sigue nuestras recomendaciones para un uso óptimo en tus proyectos."
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactRequestSection
        title="Solicita tu presupuesto hoy"
        description="Contáctanos para obtener más información sobre nuestro hormigón premezclado y servicios de entrega."
      />
    </>
  )
}

export default HormigonService
