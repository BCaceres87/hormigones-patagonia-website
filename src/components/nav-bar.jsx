import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logos/logo_navbar.png'
import styles from './nav-bar.module.scss'
import { Button } from 'antd';

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
      >
        <img className={styles.logo} alt="Patagonia Logo" src={Logo}/>
      </Link>
      <ul className={classNames(styles.list, { [styles.visible]: showMenu })}>
          <li>
            <Link
              activeclass="active"
              to='/'
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              to='/projects'
              onClick={() => setShowMenu(false)}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              to='/services'
              onClick={() => setShowMenu(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              to='/about'
              onClick={() => setShowMenu(false)}
            >
              Nosotros
            </Link>
          </li> 
          <li>
            <Button
              type="primary"
              onClick={() => {
                navigate('/contact')
                setShowMenu(false)
              }}
            >
              Contacto
            </Button>
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
