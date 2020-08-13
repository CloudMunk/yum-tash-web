import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'

import styles from './index.module.scss'


const Forretter = () => {
    return (
        <div>
            <Header />
            <h1 className={styles.header}>Forretter</h1>
            <Footer />
        </div>
    )
   
}

export default Forretter