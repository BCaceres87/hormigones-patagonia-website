import Wrapper from '../components/wrapper'
import styles from './privacy-policy.module.scss'

const PrivacyPolicy = () => {
  return (
    <section className={styles.section1}>
      <Wrapper>
       <div className={styles.text_wrapper}>
         <h2>Política de Privacidad</h2>
         <p><strong>Última actualización:</strong> 25 de mayo de 2025</p>
         <p>En <strong>Hormigones Patagonia</strong>, respetamos tu privacidad y protegemos tus datos personales conforme a la normativa vigente.</p>
         <h3>¿Qué datos recopilamos?</h3>
         <ul>
           <li>Nombre y correo electrónico.</li>
           <li>Dirección IP y datos de navegación.</li>
           <li>Cookies para análisis y funcionalidad.</li>
         </ul>
         <h3>¿Para qué usamos tus datos?</h3>
         <ul>
           <li>Responder consultas y brindar soporte.</li>
           <li>Mejorar nuestros servicios y experiencia de usuario.</li>
           <li>Generar estadísticas y análisis.</li>
         </ul>
         <h3>¿Con quién compartimos tus datos?</h3>
         <p>No compartimos tus datos con terceros, excepto cuando sea necesario para prestar el servicio o por obligación legal.</p>
         <h3>Tus derechos</h3>
         <p>Puedes acceder, modificar o eliminar tus datos personales, así como oponerte a su tratamiento o retirar tu consentimiento.</p>
         <p>Para ejercer tus derechos, escríbenos a: <a href="mailto:correo@dominio.cl">constructorahbspa@gmail.com</a></p>
         <h3>Responsable del tratamiento</h3>
         <p>
           Nombre de la empresa<br/>
           Dirección física o ciudad<br/>
           Email: <a href="mailto:constructorahbspa@gmail.com">constructorahbspa@gmail.com</a>
         </p>
       </div>
      </Wrapper>
    </section>
  )
}

export default PrivacyPolicy
