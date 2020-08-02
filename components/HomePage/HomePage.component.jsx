
// Components
import Card from '../card/card.component'
import Footer from '../footer/footer.component'

// styles
import styles from './homepage.module.scss'

// Images
import orange from '../../assets/orange.png';
import sideBar from '../../assets/sidebar.png'
import nightOut from '../../assets/nightOut.png'


const HomePage = (props) => {
    const { 
        introduction = [],
        posts = [], 
        name,
        slug
      } = props
    return ( 
        <div>
            <div className={styles.homeContainer}>
                <div className={styles.gridContainer}>
                <div>
                
                </div> 
                <div className={styles.leftDiv}>
                    <h3 className={styles.leftHeader}>
                        Unike smaker, unike opplevelser. Velkommen til Yum Tash.
                    </h3>
                    <h3 className={styles.leftHeader}>
                        
                    </h3>
                </div>
                <div className={styles.rightDiv}>
                <h3
                    style={{
                        fontFamily: "Archer SSm A",
                        fontSize: '17px',
                        textAlign: 'center',
                        paddingLeft: '15%',
                        paddingRight: '15%',
                        letterSpacing: '0.19em',
                        fontWeight: '900',
                        lineHeight: '1.6em',
                        paddinBottom: '2vw',
                    }}
                    >
                    En matblogg med fokus på miljø & gode opplevelser.
                </h3>
                
                </div>
                <div></div>
                <div></div>
                <div style={{borderRight:'0.8px solid #808080'}}>
                {/* CARD */}
                {/* <Card {...props} /> */}
                </div>
                <div>
                <img 
                    style={{height: '250px', marginTop: '75px', marginLeft: '25px'}}
                    src={orange} 
                    alt="orange" 
                />
                <h2 style={{marginLeft: '6vw'}}>
                    Populære Retter
                </h2>
                <img 
                    style={{width:'285px' , marginTop: '75px', marginLeft: '3.2vw'}}
                    src={sideBar} 
                    alt="orange" 
                />
                <h2 style={{marginLeft: '6vw'}}>
                    Unike Opplevelser
                </h2>
                <img 
                    style={{width:'285px' , marginTop: '5px', marginLeft: '3.2vw'}}
                    src={nightOut} 
                    alt="orange" 
                />
                </div>
                <div></div>
            </div>
            </div>
        </div>
    )
}

// HomePage.getInitialProps = async () => ({
//     posts: await client.fetch(groq`
//       *[_type == "post"]{
//         introduction, 
//         mainImage, 
//         secondImage, 
//         title,
//         slug,
//         "name": author->name, }
//     `)
// })

export default HomePage