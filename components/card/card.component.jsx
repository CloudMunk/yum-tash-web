// import Link from 'next/link'

import styles from './card.module.scss'


const Card = () => (
    <div className={styles.bodyCard}>
        <div className={styles.blog_slider}>
            <div className={styles.blog_slider__wrp, styles.swiper_wrapper}>
                <div className={styles.blog_slider__item}>
                    <div className={styles.blog_slider__img}>
                        <img 
                            src={"https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"} 
                            alt="" 
                        />
                    </div>
                    <div className={styles.cardText}>
                        <span>26 December 2019</span>
                        <div>Lorem Ipsum Dolor</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate 
                            repellendus magni illo ea animi? 
                        </div>
                        <a href="#" className={styles.blog_slider__button}>READ MORE</a>
                    </div>
                </div>
                
                
                
                
            </div>
            <div className={styles.blog_slider__pagination}></div>
        </div>
    </div>
)

export default Card