import { useContext } from 'react'
import { CookiesContext } from '../contexts/CookiesContext'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import styles from './cookies-banner.module.scss'

const CookiesBanner = () => {
  const { cookiesAccepted, acceptCookies, rejectCookies } = useContext(CookiesContext)

  if (cookiesAccepted !== null) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <p>
        Usamos <Link className={styles.cookies_link} to="/cookie-settings">cookies</Link> para mejorar tu experiencia. Puedes aceptar o rechazar su uso.
      </p>
      <div className={styles.buttons_wrapper}>
        <Button onClick={acceptCookies} className={styles.accept_button}>Aceptar</Button>
        <Button onClick={rejectCookies}>Rechazar</Button>
      </div>
    </div>
  );
};

export default CookiesBanner;
