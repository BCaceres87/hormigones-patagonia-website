import Wrapper from '../components/wrapper'
import CementBackground from '../assets/images/cement_background.jpg'
import CementImage from '../assets/images/cement1.jpg'
import InfoCell from '../components/info-cell'
import CallIcon from '../assets/icons/call.svg'
import TruckIcon from '../assets/icons/tabler_truck-delivery.svg'
import Constructor from '../assets/icons/mdi_construction-outline.svg'
import ContactRequestSection from '../components/contact-request-section'
import styles from './cement-service.module.scss'
import PageHeader from '../components/page-header'

const CementService = () => {
  return (
    <>
      <PageHeader
        backgroundImage={CementBackground}
        title="Cemento de alto rendimiento"
        subtitle="Entrega rápida y asesoría técnica para cada tipo de obra."
      />
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={CementImage} alt="Cemento" />
          </div>
          <div className={styles.text_wrapper}>
            <h3>
              Tipos de Cemento y Soluciones para Obras Exigentes
            </h3>
            <p>
              Ofrecemos distintos tipos de cemento adaptados a proyectos residenciales, comerciales e industriales. Nuestra prioridad es entregar calidad, resistencia y confianza.
            </p>
            <div className={styles.text_box}>
              <div>
                <h5>Variedad disponible</h5>
                <span>
                  Portland, resistente a sulfatos y cemento blanco.
                </span>
              </div>
              <div>
                <h5>Aplicaciones múltiples</h5>
                <span>
                  Ideal para estructuras, morteros, pavimentos y terminaciones.
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
              Acompañamos tu proyecto desde el pedido hasta la colocación
            </h3>
            <div className={styles.steps_wrapper}>
              <InfoCell
                image={TruckIcon}
                title="Despacho de distintos formatos"
                description="Bolsas desde 25 hasta 42.5 kg"
              />
              <InfoCell
                image={CallIcon}
                title="Asesoría técnica personalizada"
                description="Recomendaciones de mezcla y resistencia según clima y uso."
              />
              <InfoCell
                image={Constructor}
                title="Habla con nuestro equipo técnico"
                description="Contáctanos para obtener más información sobre nuestro cemento y servicios de entrega."
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

export default CementService
