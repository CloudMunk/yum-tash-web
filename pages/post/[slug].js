import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

import styles from './slug.module.scss'

// Components
import Header from '../../components/menu/menu.component';



function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  console.log(props)
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    body = [],
    introduction = []
  } = props
  return (
    <div>
      <Header />
      <article className={styles.body}>
        <div></div>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>{title}</h1>
          <img
              className={styles.mainImage}
              src={urlFor(mainImage)
              .width(500)
              .url()}
          />
          
          
         
          <BlockContent
            className={styles.paragraph}
            blocks={introduction}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <BlockContent
            className={styles.paragraph}
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
        </div>
        <div>
            <h2>This is the right side</h2>
            {categories && (
            <ul>
              Stikkord / Hashtags
              {categories.map(category => <p key={category}>{category}</p>)}
            </ul>
          )}
           {authorImage && (
            <div>
              <img
                className={styles.profilePic}
                src={urlFor(authorImage)
                  .width(100)
                  .url()}
              />
            </div>
          )}
          <span>Av {name}</span>
        </div>
        
      </article>
    </div>
      
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post