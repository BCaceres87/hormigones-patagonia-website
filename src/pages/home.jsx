import { useNavigate } from "react-router-dom"
import styles from './home.module.scss'
import Services from '../assets/images/card1.jpg'
import Arid from '../assets/images/card2.jpg'
import Cement from '../assets/images/card3.jpg'
import Card from "../components/card"
import Wrapper from "../components/wrapper"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h1>Hormigones Patagonia: calidad y confianza</h1>
            <p>En Hormigones Patagonia, nos dedicamos a ofrecer materiales de construcción de la más alta calidad, garantizando entregas puntuales y un servicio excepcional. Nuestra experiencia y compromiso nos han permitido ganar la confianza de numerosos clientes en el sector.</p>
            <div className={styles.buttons_wrapper}>
              <button 
                className={styles.primary_button}
                onClick={() => navigate('/about')}
              >
                Conócenos
              </button>
              <button 
                className={styles.secondary_button}
                onClick={() => navigate('/services')}
              >
                Servicios
              </button>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className={styles.section2}>
        <Wrapper>
          <h5>Ellos ya confían en nosotros</h5>
          <div className={styles.logos_wrapper}>
            <img src="" alt="Cliente 1" />
            <img src="" alt="Cliente 2" />
            <img src="" alt="Cliente 3" />
            <img src="" alt="Cliente 4" />
            <img src="" alt="Cliente 5" />
          </div>
        </Wrapper>
      </section>
      <section className={styles.section3}>
       <Wrapper>
         <h2>Nuestros servicios: materiales y maquinaria para construcción de calidad</h2>
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
    </div>
  )
}

export default Home
