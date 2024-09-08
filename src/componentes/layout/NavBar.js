import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to="/perfil-social/" className={styles.item}>Home</Link></li>|
                <li><Link to="perfil-social/contato" className={styles.item}>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;