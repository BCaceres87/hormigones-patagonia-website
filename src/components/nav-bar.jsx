import { useState } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo/logo_sin_fondo.png'
import styles from './nav-bar.module.scss'

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const classNameMenu = classNames(`${styles.nav_bar}`, {
		[styles.show]: !showMenu,
		[styles.hide]: showMenu,
	});

	const menuToggle = () => {
		setShowMenu(value => !value);
	}

	return (
    <nav className={classNameMenu} >
      <Link
        className={styles.logo_wrapper}
        to='/'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {/* <img className={styles.logo} alt="Patagonia Logo" src={Logo}/> */}
      </Link>
      <ul className={styles.list}>
        <li className={styles.list_element}>
          <Link
            activeclass="active"
            to='/'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link
            activeclass="active"
            to= '/projects'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className={styles.text}>Proyectos</span>
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link
            activeclass="active"
            to= '/services'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className={styles.text}>Servicios</span>
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link
            activeclass="active"
            to='/about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className={styles.text}>Nosotros</span>
          </Link>
        </li>
        <li className={styles.list_element}>
          <Link
            activeclass="active"
            to='/contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className={styles.text}>Contacto</span>
          </Link>
        </li>
      </ul>
      <div className={styles.toggle_menu} onClick={menuToggle}>
        {showMenu ?
          <FontAwesomeIcon icon={faXmark} />
          :
          <FontAwesomeIcon icon={faBars} />
        }
			</div>
		</nav>
	);
};

export default NavBar;
