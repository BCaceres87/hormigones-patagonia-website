import Wrapper from '../components/wrapper'
import styles from './service-terms.module.scss'

const ServiceTerms = () => {
  return (
    <section className={styles.section1}>
      <Wrapper>
        <div className={styles.text_wrapper}>
          <h2>Términos de Servicio</h2>
          <p><strong>Última actualización:</strong> 25 de mayo de 2025</p>
          <p>Estos Términos regulan el uso del sitio web <strong>www.hormigonespatagonia.cl</strong> y los servicios ofrecidos.</p>
          <h3>1. Aceptación de los Términos</h3>
          <p>Al acceder o utilizar nuestro sitio, aceptas cumplir con estos Términos. Si no estás de acuerdo, por favor no utilices este sitio.</p>
          <h3>2. Propiedad intelectual</h3>
          <p>Todo el contenido del sitio (textos, imágenes, código, etc.) es propiedad de <strong>Hormigones Patagonia</strong> y está protegido por leyes de derechos de autor.</p>
          <h3>3. Uso del sitio</h3>
          <p>No puedes utilizar el sitio para fines ilícitos o no autorizados.</p>
          <h3>4. Modificaciones</h3>
          <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos una vez publicados.</p>
          <h3>5. Legislación aplicable</h3>
          <p>Estos Términos se rigen por las leyes de Chile.</p>
        </div>
      </Wrapper>
    </section>
  )
}

export default ServiceTerms
