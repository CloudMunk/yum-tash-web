// import Link from 'next/link'

import styles from './card.module.scss'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Card = (props) => {
    const { 
        introduction = [],
        posts = [], 
        name,
        slug
      } = props
      return (
            <div className={styles.bodyCard}>
                <div className={styles.blog_slider}>
                    <div className={styles.blog_slider__wrp, styles.swiper_wrapper}>
                        <div className={styles.blog_slider__item}>
                            <div className={styles.blog_slider__img}>
                                <img
                                    style={{ zIndex: '1000'}}
                                    src={urlFor(posts[0].mainImage)
                                    .width(800)
                                    .url()}
                                />
                            </div>
                            <div className={styles.cardText}>
                                    {/* <span className={styles.blog_slider__code}>{posts[0].publishedAt}</span> */}
                                    <div className={styles.blog_slider__title}>
                                        {posts[0].title}
                                    </div>
                                    <div className={styles.blog_slider__text}>
                                        
                                        <BlockContent
                                            // style={{ maxWidth: '100px !important'}}
                                            blocks={posts[0].introduction}
                                            // imageOptions={{ w: 300, h: 100, fit: 'max' }}
                                            {...client.config()}
                                        />
                                    </div>
                                    <a href="#" className={styles.blog_slider__button}>LES MER</a>
                            </div>
                        </div>  
                    </div>
                </div>
                {/* CARD 2 */}
                <div className={styles.blog_slider}>
                    <div className={styles.blog_slider__wrp, styles.swiper_wrapper}>
                        <div className={styles.blog_slider__item}>
                            <div className={styles.blog_slider__img}>
                                <img
                                    style={{ zIndex: '1000'}}
                                    src={urlFor(posts[1].mainImage)
                                    .width(800)
                                    .url()}
                                />
                            </div>
                            <div className={styles.cardText}>
                                    {/* <span className={styles.blog_slider__code}>{posts[0].publishedAt}</span> */}
                                    <div className={styles.blog_slider__title}>
                                        {posts[1].title}
                                    </div>
                                    <div className={styles.blog_slider__text}>
                                        {/* Make an if statement that puts three ... if intro reaches certain length */}
                                        <BlockContent
                                            // style={{ maxWidth: '100px !important'}}
                                            blocks={posts[1].introduction}
                                            // imageOptions={{ w: 300, h: 100, fit: 'max' }}
                                            {...client.config()}
                                        />
                                    </div>
                                    <a href="#" className={styles.blog_slider__button}>LES MER</a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
      )
}

Card.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post"]{
        introduction, 
        mainImage, 
        secondImage,
        publishedAt,
        title, 
        "name": author->name, }
    `)
})

export default Card