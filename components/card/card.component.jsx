// import Link from 'next/link'

import styles from './card.module.scss'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'


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
                                    style={{marginLeft: '10px', marginTop: '30px', zIndex: '1000'}}
                                    src={urlFor(posts[0].mainImage)
                                    .width(200)
                                    .url()}
                                />
                            </div>
                            <div className={styles.cardText}>
                                <span>26 December 2019</span>
                                <div>Lorem Ipsum Dolor</div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate 
                                    repellendus magni illo ea animi? 
                                </div>
                                <a href="#" className={styles.blog_slider__button}>LES MER</a>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>
                    <div className={styles.blog_slider__pagination}></div>
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
        title, 
        "name": author->name, }
    `)
})

export default Card