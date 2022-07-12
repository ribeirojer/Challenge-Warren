import { Link } from 'react-router-dom';
import styles from './Header.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header data-testid="header" className={styles.header}>
        <Link to={"/"}><img src=".\src\assets\warren-black-logo.svg" alt="logo-warren" /></Link>
        <div className={styles.header__user}>
            <span className={styles.header__user__name}>Buffett</span>
            <img className={styles.header__user__photo} src=".\src\assets\joe-hepburn-qr7rfIthbvc-unsplash.jpg" alt="foto-user" />
        </div>
    </header>
  )
}

export default Header;