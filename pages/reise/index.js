import Link from 'next/link'
import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'
import client from '../../client'
import groq from 'groq'

import imageUrlBuilder from '@sanity/image-url'

import MainGreece from '../../assets/headerGreece.jpg'
import Barcode from '../../assets/osloBarcode.jpg'
import Denmark from '../../assets/denmark.jpg'
import Barcelona from '../../assets/barcelona2.jpg'

import styles from './reise.module.scss'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

const Reise = (props) => {
    const { countries = [] } = props
    console.log(countries)
    return (
        <div className={styles.mainBody}>
            <Header />
            <div className={styles.layout}>
                
                <div></div>
                <div className={styles.countries}>
                    {/* Greece */}
                    {/* <Link href={`/countries/${posts[0].slug.current}`}>     */}
                    {countries.map(country =>
                        <div className={styles.container}>
                        <h2 className={styles.centered}>{country.title}</h2>
                        <img 
                            className={styles.images}
                            src={urlFor(country.image)
                                .width(800)
                                .url()}
                        />
                    </div>
                    )}
                        
                    {/* </Link> */}
                    
                </div>
                
                <div></div>
            </div>
            <Footer />
        </div>
    )
}

Reise.getInitialProps = async () => ({
    countries: await client.fetch(groq`
      *[_type == "country"]{
            title,
            image
        }
    `)
})

export default Reise


// {/* Norway */}
// <div className={styles.container}>
// <h2 className={styles.centered}>Norge</h2>
// <img 
//     className={styles.images}
//     src={Barcode} 
// />
// </div>
// {/* Denmark */}
// <div className={styles.container}>
// <h2 className={styles.centered}>Danmark</h2>
// <img 
//     className={styles.images}
//     src={Denmark} 
// />
// </div>
// {/* Barcelona */}
// <div className={styles.container}>
// <h2 className={styles.centered}>Barcelona</h2>
// <img 
//     className={styles.images}
//     src={Barcelona} 
// />
// </div>