import{FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import{ CgMail } from 'react-icons/cg'
import styles from './Contato.module.css'

function Contato(){
    return(
        <div className={styles.redes}>
            <ul className={styles.list}>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
                <li><CgMail/></li>
            </ul>
        </div>
    )
}

export default Contato;