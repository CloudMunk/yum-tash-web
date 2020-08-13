import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

import Header from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'

import styles from './countries.module.scss'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }


  const Countries = (props) => {
    console.log(props)
    const {
      title = 'Missing title',
      name = 'Missing name',
      categories = [],
      mainImage,
      introduction
      
    } = props
    return (
      <div>
        <Header />
            <div className={styles.layoutCountries}>
                <div className={styles.countryCard}>
                    <img 
                        className={styles.mainImage}
                        src={urlFor(mainImage)
                        .width(500)
                        .url()} 
                    />
                </div>
            </div>
        <Footer />
      </div>
        
    )
  }
  
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    mainImage,
    introduction
  }`
  
  Countries.getInitialProps = async function (context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }
  
  export default Countries