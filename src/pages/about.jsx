import Wrapper from '../components/wrapper'
import styles from './about.module.scss'
import LogosSection from '../components/logos-section'
import AboutCard from '../components/about-card'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.header}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h1>Conócenos</h1>
            <p>Hormigones Patagonia, su aliado en materiales de construcción de calidad y servicio excepcional en cada proyecto.</p>
          </div>
        </Wrapper>
      </section>
      <LogosSection title="Empresas que confían en nosotros"/>
      <section>
        <Wrapper>
          <AboutCard/>
        </Wrapper>
      </section>
      <section className={styles.section4}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <div className={styles.title_wrapper}>
              <strong>Experiencia</strong>
              <h2>Nuestra trayectoria en el sector de la construcción</h2>
            </div>
            <div className={styles.description_wrapper}>
              <p>Con más de 15 años en el mercado, hemos completado más de 500 proyectos exitosos. Nuestra dedicación al cliente se refleja en un 95% de satisfacción.</p>
              <div className={styles.cyphers_wrapper}>
                <div>
                  <h2>95%</h2>
                  <span>Clientes satisfechos en toda la región</span>
                </div>
                <div>
                  <h2>500</h2>
                  <span>Proyectos completados con éxito y calidad</span>
                </div>
              </div>
              <Button onClick={() => navigate('/contact')}>Contáctanos</Button>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default About
