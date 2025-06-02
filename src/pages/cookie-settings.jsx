import Wrapper from '../components/wrapper';
import { Button } from 'antd';
import styles from './cookie-settings.module.scss'
import { useContext } from 'react';
import { CookiesContext } from '../contexts/CookiesContext';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

const CookieSettings = () => {
  const { acceptCookies, rejectCookies, cookiesAccepted } = useContext(CookiesContext);

  const handleAccept = () => {
    acceptCookies();
  };

  const handleReject = () => {
    rejectCookies();
  };

  return (
    <section className={styles.section1}>
     <Wrapper>
      <div className={styles.text_wrapper}>
        <h2>Configuración de Cookies</h2>
        <p>Utilizamos cookies para mejorar tu experiencia en el sitio.</p>
        <h3>¿Qué son las cookies?</h3>
        <p>
        Son pequeños archivos que se almacenan en tu navegador para reconocer tus preferencias y mejorar la navegación.
        </p>
        <h3>Tipos de cookies que utilizamos:</h3>
        <ul>
        <li><strong>Necesarias:</strong> permiten el funcionamiento básico del sitio.</li>
        <li><strong>Analíticas:</strong> nos ayudan a entender cómo se usa el sitio.</li>
        <li><strong>Funcionales:</strong> recuerdan tus preferencias.</li>
        <li><strong>Marketing:</strong> se usan para mostrar publicidad relevante.</li>
        </ul>
        <h3>Tu elección</h3>
        <p>Puedes aceptar todas las cookies, rechazar las no esenciales o personalizar tus preferencias.</p>
        {(cookiesAccepted === null) && <div className={styles.buttons_wrapper}>
          <Button type="primary" onClick={handleAccept}>Aceptar todas</Button>
          <Button onClick={handleReject}>Rechazar no esenciales</Button>
        </div>}
        {(cookiesAccepted === false || cookiesAccepted === true) && (
          <div className={styles.redirect_wrapper}>
            <Link to="/" className={styles.link}><LeftOutlined /> Volver al Home</Link>
          </div>
          )}
      </div>
     </Wrapper>
    </section>
  );
};

export default CookieSettings;
