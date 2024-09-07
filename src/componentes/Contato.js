import{FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import{ CgMail } from 'react-icons/cg'
import styles from './Contato.module.css'

function Contato(){
    return(
        <div className={styles.redes}>
            <ul className={styles.list}>
                <li><a href='https://www.instagram.com/jenny_lorhaynne/' target='_blank'><FaInstagram/></a></li>
                <li><a href='https://www.linkedin.com/in/jeniffer-lorhaynne-nascimento-96a42b2a1' target='_blank'><FaLinkedin/></a></li>
                <li><a href='https://github.com/jenna428' target='_blank'><FaGithub/></a></li>
                <li><a href='mailto:jeniffer28nascimento@gmail.com'><CgMail/></a></li>
            </ul>
        </div>
    )
}

export default Contato;