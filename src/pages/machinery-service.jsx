import styles from './machinery-service.module.scss'
import MachineryBackground from '../assets/images/machinery_background.webp'
import MachineryImage from '../assets/images/machinery2.webp'
import InfoCell from '../components/info-cell'
import CallIcon from '../assets/icons/call.svg'
import TruckIcon from '../assets/icons/tabler_truck-delivery.svg'
import Constructor from '../assets/icons/mdi_construction-outline.svg'
import ContactRequestSection from '../components/contact-request-section'
import PageHeader from '../components/page-header'
import Wrapper from '../components/wrapper'

const MachineryService = () => {
 
  return (
    <>
      <PageHeader
        backgroundImage={MachineryBackground}
        title="Arriendo de Maquinaria"
        subtitle="Retroexcavadora, minicargador y autohormigonera disponibles para proyectos exigentes."
      />
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={MachineryImage} alt="Hormigon image" loading="lazy" />
          </div>
          <div className={styles.text_wrapper}>
            <h3>
              Equipos de Construcción para Movimiento, Mezcla y Excavación
            </h3>
            <p>
              Nuestra flota está pensada para faenas pequeñas, medianas o grandes. Todas las máquinas están operativas, listas para entrega, y disponibles con o sin operador calificado.
            </p>
            <div className={styles.text_box}>
              <div>
                <h5>Retroexcavadora</h5>
                <span>
                  Ideal para excavaciones profundas, nivelación y carga.
                </span>
              </div>
              <div>
                <h5>Minicargador</h5>
                <span>
                  Eficiente en espacios reducidos y maniobras rápidas.
                </span>
              </div>
              <div>
                <h5>Autohormigonera</h5>
                <span>
                  Mezclado en sitio para mayor rendimiento y precisión.
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
              ¿Cómo funciona el arriendo?
            </h3>
            <div className={styles.steps_wrapper}>
              <InfoCell
                image={TruckIcon}
                title="Arriendo por día, semana o faena."
                description="Flexibilidad total según el avance de tu proyecto."
              />
              <InfoCell
                image={CallIcon}
                title="Operadores capacitados disponibles"
                description="Todo el equipo puede ser entregado con operador incluido."
              />
              <InfoCell
                image={Constructor}
                title="Traslado directo a obra"
                description="Coordinamos la entrega puntual del equipo donde lo necesites."
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactRequestSection
        title="Consulta disponibilidad y agenda tu equipo"
        description="Contáctanos para obtener más información sobre nuestros áridos y servicios de entrega."
      />
   </>
  )
}

export default MachineryService
