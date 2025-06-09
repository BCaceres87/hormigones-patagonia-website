import PageHeader from '../components/page-header'
import ServicesImage from '../assets/images/services_background.jpg'
import Wrapper from '../components/wrapper'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import styles from './services.module.scss'
import Hormigon from '../assets/images/hormigon1.jpg'
import Arid from '../assets/images/arid1.png'
import Cement from '../assets/images/cement1.jpg'
import Machinery from '../assets/images/machinery1.jpg'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        backgroundImage={ServicesImage}
        title="Nuestros Servicios"
        subtitle="Ofrecemos materiales de construcción de calidad y maquinaria para todos tus proyectos."
      />
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <strong>Hormigón</strong>
            <h2>
              Venta de Hormigón: Calidad y eficiencia para tus proyectos de construcción
            </h2>
            <p>
              Hormigón premezclado de alta calidad, listo para tu obra.Resistente, duradero y con entregas puntuales que se adaptan a tus necesidades.
            </p>
            <Button type="primary" onClick={() => navigate('/services/hormigon')}> Ver más <RightOutlined /></Button>
          </div>
          <div className={styles.image_wrapper}>
            <img src={Hormigon} alt="Hormigon image" />
          </div>
        </Wrapper>
      </section>
      <section className={styles.section2}>
        <Wrapper>
          <div className={styles.image_wrapper}>
            <img src={Arid} alt="Arid image" />
          </div>
          <div className={styles.text_wrapper}>
            <strong>Áridos</strong>
            <h2>
              Calidad y variedad en nuestros áridos
            </h2>
            <p>
              Ofrecemos una amplia gama de áridos para satisfacer todas tus necesidades de construcción. Desde gravilla hasta arena, garantizamos materiales de alta calidad y entrega oportuna.
            </p>
            <Button type="primary" onClick={() => navigate('/services/arids')}> Ver más <RightOutlined /></Button>
          </div>
        </Wrapper>
      </section>
      <section className={styles.section3}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <strong>Cemento</strong>
            <h2>
              Calidad y eficiencia en la venta de cemento
            </h2>
            <p>
              Ofrecemos cemento de alta calidad para todos tus proyectos de construcción. Nuestro compromiso es garantizar entregas puntuales y un servicio excepcional.
            </p>
            <div className={styles.text_box}>
              <div>
                <h5>
                  Variedad disponible</h5>
                <span>
                  Contamos con diferentes tipos de cemento para satisfacer tus necesidades específicas.
                </span>
              </div>
              <div>
                <h5>
                  Asesoría experta
                </h5>
                <span>
                  Nuestro equipo está listo para asesorarte en la elección del cemento adecuado.
                </span>
              </div>
            </div>
            <Button type="primary" onClick={() => navigate('/services/cement')}> Ver más <RightOutlined /></Button>
          </div>
          <div className={styles.image_wrapper}>
            <img src={Cement} alt="Cement image" />
          </div>
        </Wrapper>
      </section>
      <section className={styles.section4}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <div className={styles.title_wrapper}>
              <strong>Maquinaria</strong>
              <h3>
                Arriendo de Maquinaria para Construcción Eficiente
              </h3>
            </div>
            <div className={styles.paragraph_wapper}>
              <p>
                Nuestro servicio de arriendo de maquinaria ofrece equipos de alta calidad, como retroexcavadoras y minicargadores, ideales para cualquier proyecto de construcción. Garantizamos entregas puntuales y un mantenimiento constante para asegurar el mejor rendimiento. Con nosotros, tendrás la confianza de contar con la maquinaria adecuada para llevar a cabo tus obras.
              </p>
              {/* <Button type="primary"> Ver más <RightOutlined /></Button> */}
            </div>
          </div>
          <div className={styles.image_wrapper}>
            <img src={Machinery} alt="Machinery image" />
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default Services
