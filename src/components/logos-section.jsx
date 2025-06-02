import styles from './logos-section.module.scss'
import Ancud from "../assets/logos/ancud_logo.png"
import Aysen from "../assets/logos/aysen_logo.png"
import Cochamo from "../assets/logos/cochamo_logo.png"
import Coyhaique from "../assets/logos/coyhaique_logo.png"
import Mostazal from "../assets/logos/mostazal_logo.webp"
import Duoc from "../assets/logos/duoc_logo.png"
import Quinchao from "../assets/logos/quinchao_logo.png"
import Wrapper from './wrapper'

const LogosSection = ({title}) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h5>{title}</h5>
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
  )
}

export default LogosSection
