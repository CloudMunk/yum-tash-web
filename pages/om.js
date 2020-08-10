import Header from '../components/menu/menu.component'
import Footer from '../components/footer/footer.component'

import styles from './om.module.scss'

import Tash from '../assets/Tash.jpg'

const Om = (props) => {
    const { posts = [] } = props
    return (
        <div>
            <Header />
            
            <div className={styles.body}>
                <div>1</div>
                <div className={styles.leftSide}>
                    <h1>Velkommen til bloggen min!</h1>
                </div>
                <div className={styles.rightSide}>
                    <h2>
                        Opplevelser, Reiser, Mat.
                    </h2>
                </div>
                <div>4</div>
                <div>5</div>
                <div className={styles.mainLeftSide}>
                    <h2>
                        Her kommer en tittel
                    </h2>
                    <p>
                        Her kommer det pragrafer med tekst.
                       
                    </p>
                    <p className={styles.leftSideParagraphs}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
                        roots in a piece of classical Latin literature from 45 BC, making it over 2000 
                        years old. Richard McClintock, a Latin professor at Hampden-Sydney College in 
                        Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem 
                        Ipsum passage, and going through the cites of the word in classical literature, 
                        discovered the undoubtable source. 
                    </p>
                    <p className={styles.leftSideParagraphs}>
                        Lorem Ipsum comes from sections 1.10.32 and 
                        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during 
                        the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                        from a line in section 1.10.32.
                    </p>
                </div>
                <div>
                <img 
                    className={styles.profileImage}
                    src={Tash} 
                />
                </div>
                <div>8</div>
                
            </div>
            
            <Footer />
        </div>
    )
}

export default Om