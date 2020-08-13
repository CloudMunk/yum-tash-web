import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'

import MainGreece from '../../assets/headerGreece.jpg'
import Barcode from '../../assets/osloBarcode.jpg'
import Denmark from '../../assets/denmark.jpg'
import Barcelona from '../../assets/barcelona2.jpg'

import styles from './reise.module.scss'

const Reise = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            <div className={styles.layout}>
                
                <div></div>
                <div className={styles.countries}>
                    {/* Greece */}
                    <div className={styles.container}>
                        <h2 className={styles.centered}>Hellas</h2>
                        <img 
                            className={styles.images}
                            src={MainGreece} 
                        />
                    </div>
                    {/* Norway */}
                    <div className={styles.container}>
                        <h2 className={styles.centered}>Norge</h2>
                        <img 
                            className={styles.images}
                            src={Barcode} 
                        />
                    </div>
                    {/* Denmark */}
                    <div className={styles.container}>
                        <h2 className={styles.centered}>Danmark</h2>
                        <img 
                            className={styles.images}
                            src={Denmark} 
                        />
                    </div>
                    {/* Barcelona */}
                    <div className={styles.container}>
                        <h2 className={styles.centered}>Barcelona</h2>
                        <img 
                            className={styles.images}
                            src={Barcelona} 
                        />
                    </div>
                </div>
                
                <div></div>
            </div>
            <Footer />
        </div>
    )

}

export default Reise