import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from './warren-black-logo.svg'
import foto from './joe-hepburn-qr7rfIthbvc-unsplash.jpg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header data-testid="header" className={styles.header}>
        <Link to={"/"}><img src={logo} alt="logo-warren" /></Link>
        <div className={styles.header__user}>
            <span className={styles.header__user__name}>Buffett</span>
            <img className={styles.header__user__photo} src={foto} alt="foto-user" />
        </div>
    </header>
  )
}

export default Header;
