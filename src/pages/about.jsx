import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import Wrapper from '../components/wrapper'
import styles from './about.module.scss'
import LogosSection from '../components/logos-section'
import AboutCard from '../components/about-card'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import AboutImage from '../assets/images/about_background.webp'
import PageHeader from '../components/page-header'
import { useState, useEffect } from "react";

const About = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = AboutImage;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      <PageHeader
        backgroundImage={AboutImage}
        title="Conócenos"
        subtitle="Hormigones Patagonia, su aliado en materiales de construcción de calidad y servicio excepcional en cada proyecto."
      />
      <div className={styles.skeleton + (!bgLoaded ? ' ' + styles.skeleton : '')} style={!bgLoaded ? {position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10000} : {display: 'none'}}>
        {!bgLoaded && (
          <div className={styles.bgSkeleton}>
            <div className={styles.bgSkeleton__spinner}></div>
            <span>Preparando tu experiencia...</span>
          </div>
        )}
      </div>
      <section className={styles.section1} style={!bgLoaded ? {visibility: 'hidden'} : {}}>
        <Wrapper>
          <LogosSection title="Empresas que confían en nosotros"/>
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
              <div className={styles.cyphers_wrapper} ref={ref}>
                <div>
                  <h2>{inView ? <CountUp end={95} duration={2} suffix="%" /> : '0%'}</h2>
                  <span>Clientes satisfechos en toda la región</span>
                </div>
                <div>
                  <h2>{inView ? <CountUp end={500} duration={2.5} /> : '0'}</h2>
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
