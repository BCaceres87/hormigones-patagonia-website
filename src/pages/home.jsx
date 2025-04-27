import Layout from "../components/layout"
import styles from './home.module.scss'

const Home = () => {
  return (
    <Layout>
      <section className={styles.container}>
       <div className={styles.text_wrapper}>
         <h1>Hormigones Patagonia: calidad y confianza</h1>
         <p>En Hormigones Patagonia, nos dedicamos a ofrecer materiales de construcción de la más alta calidad, garantizando entregas puntuales y un servicio excepcional. Nuestra experiencia y compromiso nos han permitido ganar la confianza de numerosos clientes en el sector.</p>
       <div className={styles.buttons_wrapper}>
        <button className={styles.primary_button}>Conócenos</button>
        <button className={styles.secondary_button}>Servicios</button>
       </div>
       </div>
      </section>
    </Layout>
  )
}

export default Home
