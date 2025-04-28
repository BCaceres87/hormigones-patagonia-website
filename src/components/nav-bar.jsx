import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo/logo_navbar.png'
import styles from './nav-bar.module.scss'

const NavBar = () => {
  const navigate = useNavigate();
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
        <img className={styles.logo} alt="Patagonia Logo" src={Logo}/>
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
            Home
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
            Proyectos
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
            Servicios
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
            Nosotros
          </Link>
        </li>
        <li className={styles.list_element}>
          <button
            activeclass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => navigate('/contact')}
            className={styles.contact_button}
          >
            Contacto
          </button>
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
