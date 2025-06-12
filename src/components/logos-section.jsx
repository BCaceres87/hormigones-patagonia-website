import styles from './logos-section.module.scss'
import Ancud from "../assets/logos/ancud_logo.webp"
import Aysen from "../assets/logos/aysen_logo.webp"
import Cochamo from "../assets/logos/cochamo_logo.webp"
import Coyhaique from "../assets/logos/coyhaique_logo.webp"
import Mostazal from "../assets/logos/mostazal_logo.webp"
import Duoc from "../assets/logos/duoc_logo.webp"
import Quinchao from "../assets/logos/quinchao_logo.webp"
import Wrapper from './wrapper'

const LogosSection = ({title}) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h5>{title}</h5>
        <div className={styles.logos_wrapper}>
          <img src={Ancud} alt="Ancud logo" loading="lazy" />
          <img src={Aysen} alt="Cliente 2" loading="lazy" />
          <img src={Cochamo} alt="Cliente 3" loading="lazy" />
          <img src={Coyhaique} alt="Cliente 4" loading="lazy" />
          <img src={Mostazal} alt="Cliente 5" loading="lazy" />
          <img src={Quinchao} alt="Cliente 5" className={styles.quinchao_logo} loading="lazy" />
          <img src={Duoc} alt="Cliente 5" loading="lazy" />
        </div>
      </Wrapper>
    </section>
  )
}

export default LogosSection
