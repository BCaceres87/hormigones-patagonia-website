import { Link, useNavigate } from "react-router-dom"
import styles from './home.module.scss'
import Services from '../assets/images/card1.jpg'
import Arid from '../assets/images/card2.jpg'
import Cement from '../assets/images/card3.jpg'
import Img1 from '../assets/images/image1.jpg'
import Card from "../components/card"
import Wrapper from "../components/wrapper"
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, RightOutlined } from "@ant-design/icons"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"
import { Button } from "antd"
import Ancud from "../assets/logos/ancud_logo.png"
import Aysen from "../assets/logos/aysen_logo.png"
import Cochamo from "../assets/logos/cochamo_logo.png"
import Coyhaique from "../assets/logos/coyhaique_logo.png"
import Mostazal from "../assets/logos/mostazal_logo.webp"
import Duoc from "../assets/logos/duoc_logo.png"
import Quinchao from "../assets/logos/quinchao_logo.png"

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h1>Hormigones Patagonia: calidad y confianza</h1>
            <p>En Hormigones Patagonia, nos dedicamos a ofrecer materiales de construcción de la más alta calidad, garantizando entregas puntuales y un servicio excepcional. Nuestra experiencia y compromiso nos han permitido ganar la confianza de numerosos clientes en el sector.</p>
            <div className={styles.buttons_wrapper}>
              <Button 
                type="secondary"
                onClick={() => navigate('/about')}
              >
                Conócenos
              </Button>
              <Button 
                className={styles.services_button}
                onClick={() => navigate('/services')}
              >
                Servicios
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className={styles.section2}>
        <Wrapper>
          <h5>Ellos ya confían en nosotros</h5>
          <div className={styles.logos_wrapper}>
            <img src={Ancud} alt="Ancud logo" />
            <img src={Aysen} alt="Cliente 2" />
            <img src={Cochamo} alt="Cliente 3" />
            <img src={Coyhaique} alt="Cliente 4" />
            <img src={Mostazal} alt="Cliente 5" />
            <img src={Quinchao} alt="Cliente 5" className={styles.quinchao_logo}/>
            <img src={Duoc} alt="Cliente 5" />
          </div>
        </Wrapper>
      </section>
      <section className={styles.section3}>
       <Wrapper>
         <h3>Nuestros servicios: materiales y maquinaria para construcción de calidad</h3>
         <div className={styles.cards_wrapper}>
           <Card
             image={Services}
             title="Soluciones efectivas para todos tus proyectos de construcción"
             description="Ofrecemos hormigón premezclado de alta calidad para tus obras"
             linkText="Nuestros servicios"
             path="/services"
           />
           <Card
             image={Arid}
             title="Soluciones efectivas para todos tus proyectos de construcción"
             description="Disponemos de gravilla, arena y otros áridos para tus necesidades."
             linkText="Nuestros áridos"
             path="/services"
           />  
           <Card
             image={Cement}
             title="Soluciones efectivas para todos tus proyectos de construcción"
             description="Proporcionamos cemento que cumple con los más altos estándares."
             linkText="Nuestros proyectos"
             path="/projects"
           />
         </div>
       </Wrapper>
      </section>
      <section className={styles.section4}>
       <Wrapper>
        <div className={styles.content_wrapper}>
           <img src={Img1} alt="Imagen camión" />
           <div className={styles.text_wrapper}>
             <h2>Confiabilidad en cada proyecto de construcción</h2>
             <p>
               En Hormigones Patagonia, nuestra misión es proporcionar materiales de construcción de la más alta calidad, asegurando entregas puntuales y un servicio al cliente excepcional. Nuestra visión es ser la empresa líder en el sector, reconocida por nuestra integridad y compromiso con la satisfacción del cliente.
             </p>
             <Link to="">Saber más <RightOutlined /></Link>
           </div>
        </div>
       </Wrapper>
      </section>
      <section className={styles.section5}>
       <Wrapper>
        <div className={styles.content_wrapper}>
          <div>
             <span>
               Cotiza con nosotros
             </span>
             <h2>
               Contáctanos
             </h2>
             <p>Estamos aquí para ayudarte</p>
             <span className={styles.data_text}><MailOutlined /> constructorahbspa@gmail.com</span>
             <span className={styles.data_text}><PhoneOutlined /> +56 9 6628 3243</span>
             <span className={styles.data_text}><EnvironmentOutlined /> Monte verde 0108, Valdivia, Chile</span>
          </div>
            <ContactForm/>
        </div>
       </Wrapper>
     </section>
    </Layout>
  )
}

export default Home
