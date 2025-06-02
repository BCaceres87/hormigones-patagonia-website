import { Link } from "react-router-dom"
import Logo from '../assets/logos/logo_footer.png'
import styles from './footer.module.scss'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, XOutlined, YoutubeOutlined } from "@ant-design/icons"

const Footer = () => {
  return (
    <footer>
     <div className={styles.links_container}>
       <Link
         className={styles.logo_wrapper}
         to='/'
         spy={true}
         smooth={true}
         offset={50}
         duration={500}
       >
         <img className={styles.logo} alt="Patagonia Logo" src={Logo}/>
       </Link>
       <ul className={styles.links_wrapper}>
         <li>
           <Link to="/contact">Contacto Rápido</Link>
         </li>
         <li>
           <Link to="/services">Nuestros Servicios</Link>
         </li>
         <li>
           <Link to="/projects">Proyectos Destacados</Link>
         </li>
         <li>
           <Link to="/about">Quiénes Somos</Link>
         </li>
       </ul>
       <ul className={styles.social_icons_wrapper}>
         <li>
           <Link><FacebookOutlined /></Link>
         </li>
         <li>
           <Link><InstagramOutlined /></Link>
         </li>
         <li>
           <Link><XOutlined /></Link>
         </li>
         <li>
           <Link><LinkedinOutlined /></Link>
         </li>
         <li>
           <Link><YoutubeOutlined /></Link>
         </li>
       </ul>
     </div>
     <div className={styles.policies_wrapper}>
      <ul>
        <li>
          <span className={styles.rights_reserved_text}>
            © 2025 Hormigones Patagonia. Todos los derechos reservados.
          </span>
        </li>
        <li>
          <Link className={styles.policy_link} to="/privacy-policy">Política de Privacidad</Link>
        </li>
        <li>
          <Link className={styles.policy_link} to="/service-terms">Términos de Servicio</Link>
        </li>
        <li>
          <Link className={styles.policy_link} to="/cookie-settings">Configuración de Cookies</Link>
        </li>
      </ul>
     </div>
    </footer>
  )
}

export default Footer
