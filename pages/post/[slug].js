import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

// Social Share buttons
// import { FacebookShareButton } from 'react-share'

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
    categories = [],
    authorImage,
    mainImage,
    secondBody,
    secondImage,
    thirdBody,
    thirdImage,
    fourthBody,
    fourthImage,
    fifthImage,
    body = [],
    introduction = [],
    titleA,
    ingredientsA = [],
    titleB,
    ingredientsB = [],
    titleC,
    ingredientsC = [],
    titleD,
    ingredientsD = [],
    
  } = props
  return (
    <div>
      {/* <div style={{
            width: '100%',
            height: '25px',
            backgroundImage: 'url(https://i.imgur.com/fF3cAue.png)',
            backgroundSize: '30px 15px',
            backgroundRepeat: 'repeat-x',
            backgroundPositionY: '0px'
        }}></div> */}
      <Header />
      <article className={styles.body}>
        <div></div>
        <div style={{borderRight:'0.8px solid #808080', borderBottom: '0.8px solid #808080'}}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div style={{borderBottom: '0.8px solid #808080'}}>
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
                    paddinBottom: '2vw'
                  }}
                >
                En matblogg med fokus på miljø & gode opplevelser.
              </h3>
        </div>
        <div></div>
        <div></div>
        <div style={{borderRight:'0.8px solid #808080'}}>
        <img
              className={styles.mainImage}
              src={urlFor(mainImage)
              .width(500)
              .url()}
          />
          <br />
          <span>Av {name}</span>
          <BlockContent
            className={styles.introduction}
            blocks={introduction}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <div className={styles.ingredients}>
              <div>
                <h3 className={styles.titles}>{titleA}</h3>
                <BlockContent
                  className={styles.ingredientsA}
                  blocks={ingredientsA}
                  imageOptions={{ w: 320, h: 240, fit: 'max' }}
                  {...client.config()}
                />
              </div>
              <div>
              <h3 className={styles.titles}>{titleB}</h3>
                <BlockContent
                  className={styles.ingredientsA}
                  blocks={ingredientsB}
                  imageOptions={{ w: 320, h: 240, fit: 'max' }}
                  {...client.config()}
                />
              </div>
              <div>
              <h3 className={styles.titles}>{titleC}</h3>
              <BlockContent
                  className={styles.ingredientsA}
                  blocks={ingredientsC}
                  imageOptions={{ w: 320, h: 240, fit: 'max' }}
                  {...client.config()}
                />
              </div>
              <div>
              <h3 className={styles.titles}>{titleD}</h3>
                <BlockContent
                    className={styles.ingredientsA}
                    blocks={ingredientsD}
                    imageOptions={{ w: 320, h: 240, fit: 'max' }}
                    {...client.config()}
                  />
              </div>
          </div>
          <BlockContent
            className={styles.paragraph}
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />

          <h2>SLIK GJØR DU</h2>
          <img
              className={styles.mainImage}
              src={urlFor(secondImage)
              .width(500)
              .url()}
          />    
          <h2>{title}</h2>
          <BlockContent
            className={styles.paragraph}
            blocks={secondBody}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <img
              className={styles.mainImage}
              src={urlFor(thirdImage)
              .width(500)
              .url()}
          /> 
          <BlockContent
            className={styles.paragraph}
            blocks={thirdBody}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <img
              className={styles.mainImage}
              src={urlFor(fourthImage)
              .width(500)
              .url()}
          /> 
          <BlockContent
            className={styles.paragraph}
            blocks={fourthBody}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <img
              className={styles.mainImage}
              src={urlFor(fifthImage)
              .width(500)
              .url()}
          />
        </div>
        <div>
          <img
              className={styles.profilePic}
              src={urlFor(authorImage)
                .width(100)
                .url()}
            />
            <p className={styles.backgroundInfo}>
              Her går litt basic info og background story om Natasha. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap 
              into electronic typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software 
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
            <ul className={styles.hashtags}>
              {categories.map(category => <p className={styles.tags} key={category}>{category}</p>)}
            </ul>
        </div>
        <div></div>
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
  secondImage,
  secondBody,
  introduction,
  thirdBody,
  thirdImage,
  fourthImage,
  fourthBody,
  fifthImage,
  titleA,
  ingredientsA,
  titleB,
  ingredientsB,
  titleC,
  ingredientsC,
  titleD,
  ingredientsD,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post