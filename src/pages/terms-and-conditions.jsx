import Wrapper from '../components/wrapper'
import Layout from '../components/layout'
import styles from './terms-and-conditions.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className={styles.section1}>
        <Wrapper>
          <div className={styles.text_wrapper}>
            <h1>Términos y Condiciones de Uso del Formulario de Contacto</h1>
            <p><strong>Fecha de entrada en vigor:</strong> 14/05/2025</p>
            <p>
              Bienvenido al sitio web de Hormigones Patagonia. Agradecemos tu interés en ponerte en contacto con nosotros. Antes de enviar tu información mediante nuestro formulario de contacto, te pedimos que leas atentamente estos Términos y Condiciones.
            </p>
            <h2>1. Responsable del tratamiento</h2>
            <p>Hormigones Patagonia es responsable del tratamiento de los datos personales que ingreses en este sitio web. Puedes contactarnos en:</p>
            <ul>
              <li><strong>Correo electrónico:</strong> <a href="constructorahbspa@gmail.com">constructorahbspa@gmail.com</a></li>
              <li><strong>Dirección:</strong> Monte verde 0108, Valdivia</li>
              <li><strong>Teléfono:</strong> +56 9 6628 3243</li>
            </ul>
            <h2>2. Datos que recopilamos</h2>
            <p>A través del formulario de contacto solicitamos los siguientes datos personales:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de celular</li>
              <li>Mensaje que deseas enviarnos</li>
            </ul>
            <p>Estos datos son necesarios para poder responder adecuadamente a tu solicitud.</p>
            <h2>3. Finalidad del tratamiento</h2>
            <p>Tus datos personales serán utilizados exclusivamente para:</p>
            <ol>
              <li>Responder a tus consultas o solicitudes de información.</li>
              <li>Ponernos en contacto contigo por correo electrónico o teléfono si es necesario.</li>
            </ol>
            <h2>4. Base legal para el tratamiento</h2>
            <p>La base legal para el tratamiento de tus datos personales es tu consentimiento, que otorgas al marcar la casilla de aceptación de estos Términos y Condiciones antes de enviar el formulario.</p>
            <h2>5. Conservación de los datos</h2>
            <p>Tus datos personales serán conservados por el tiempo estrictamente necesario para cumplir con la finalidad mencionada, y posteriormente podrán ser eliminados o anonimizados.</p>
            <h2>6. Compartición de los datos</h2>
            <p>Hormigones Patagonia no comparte tus datos con terceros, salvo en los siguientes casos:</p>
            <ul>
              <li>Proveedores de servicios que colaboran con el envío del formulario (por ejemplo, EmailJS u otros servicios de correo).</li>
              <li>Requerimientos legales de autoridades competentes.</li>
            </ul>
            <h2>7. Seguridad</h2>
            <p>Adoptamos las medidas de seguridad necesarias para proteger tus datos contra accesos no autorizados, pérdida o modificación.</p>
            <h2>8. Derechos del usuario</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos incorrectos o incompletos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p>Para ejercer estos derechos, contáctanos al correo electrónico indicado anteriormente.</p>
            <h2>9. Cambios en los Términos y Condiciones</h2>
            <p>Nos reservamos el derecho de actualizar o modificar estos Términos y Condiciones. Cualquier cambio será publicado en esta misma página.</p>
            <hr/>
            <p><strong>Si no estás de acuerdo con estos términos, por favor no envíes el formulario de contacto.</strong></p>
          </div>
          <div className={styles.buttons_wrapper}>
            <Link to="/"><LeftOutlined /> Volver al Home</Link>
            <Button
              onClick={() => navigate('/contact')}
              className={styles.contact_button}
              type="primary"
            >
              Ir al formulario
            </Button>
          </div>
        </Wrapper>
      </section>
    </Layout>
  )
}

export default TermsAndConditions
