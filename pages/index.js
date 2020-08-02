import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'
import dynamic from 'next/dynamic'

// Default Layout
import DefaultLayout from '../layouts';
import imageUrlBuilder from '@sanity/image-url'

import styles from './index.module.scss'
// Components

// const HomePage = dynamic(() => import('../components/homepage/homepage.component'))
// import HomePage from '../components/homepage/homepage.component'
import Footer from '../components/footer/footer.component'

// Images
import orange from '../assets/orange.png';
import sideBar from '../assets/sidebar.png'
import nightOut from '../assets/nightOut.png'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
    const { 
      introduction = [],
      posts = [], 
      name,
      slug
    } = props
    return (
    <div>
        <DefaultLayout />
        {/* FOLD */}
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
                <div className={styles.bodyCard}>
                {/* CARD 1 */}
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
                                <Link href={`/post/${posts[0].slug.current}`}>
                                    <a href="#" className={styles.blog_slider__button}>LES MER</a>
                                </Link>
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
                            </div>
                        </div>  
                    </div>
                    <Link href={`/post/${posts[1].slug.current}`}>
                        <div className={styles.blog_slider__button}>
                            <span className={styles.buttonText}>LES MER</span>
                        </div>
                    </Link>
                </div>
            </div>
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
        {/* <Footer /> */}
        <Footer />
    </div>
      
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post"]{
        introduction, 
        mainImage, 
        secondImage, 
        title,
        slug,
        "name": author->name, }
    `)
})


export default Index

 {/* <div>
            
              {posts.map(
                ({ _id, title = '', slug = '', _updatedAt = '' }) =>
                  slug && (
                    <li key={_id}>
                      <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                        <a>{title}</a>
                      </Link>{' '}
                      ({new Date(_updatedAt).toDateString()})
                    </li>
                  )
              )}
          </div> */}

      //     <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px', marginTop: '-1.2vw'}}>
        //   <div>
        //     <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>
        //     <div style={{
        //         marginTop: '45px',
        //         marginLeft: '17%', 
        //         backgroundColor: '#1C060A', 
        //         maxWidth: '50vw',
        //         minWidth: '50vw',
        //         minHeight: '20vw',
        //         maxHeight: '20vw',
        //         // borderRadius: '10px'
        //         }}
        //     >
        //       <div style={{display: 'flex', justifyContent: 'space-around'}}>
        //         <div>
        //           <h3 style={{
        //                 marginLeft: '10px',
        //                 color: 'white'
        //               }}
        //             >
        //               {posts[0].title}
        //           </h3>
                  
        //           <img
        //             style={{marginLeft: '10px', marginTop: '30px'}}
        //             src={urlFor(posts[0].mainImage)
        //               .width(200)
        //               .url()}
        //           />
        //         </div>
        //         {/* CARD */}
        //         <div  style={{
        //             color: 'white', 
        //             marginTop: '1.5vw', 
        //             backgroundColor: '#226666', 
        //             padding: '5px 20px', 
        //             minWidth: '24vw',
        //             maxWidth: '28vw',
        //             maxHeight: '320px',
        //             borderRadius: '10px'
        //             }}
        //           >
        //           <h2>
        //             Description
        //           </h2>
        //           <p style={{color: 'white'}}>
        //             Author: {posts[0].name}
        //           </p>
        //           <BlockContent
        //             // style={{ maxWidth: '100px !important'}}
        //             blocks={posts[0].introduction}
        //             // imageOptions={{ w: 300, h: 100, fit: 'max' }}
        //             {...client.config()}
        //           />
        //           {/* <p style={{color: 'white', fontSize: '12px'}}>
        //               {introduction}
        //           </p> */}
        //         </div>
        //       </div>
        //     </div>
        //  </div>
          
      // </div>
    // CARD
    //   <div  style={{
    //     color: 'white', 
    //     marginTop: '1.5vw', 
    //     backgroundColor: '#226666', 
    //     padding: '5px 20px', 
    //     minWidth: '24vw',
    //     maxWidth: '28vw',
    //     maxHeight: '320px',
    //     borderRadius: '10px'
    //     }}
    //   >
    //   <h2>
    //     Description
    //   </h2>
    //   <p style={{color: 'white'}}>
    //     Author: {posts[0].name}
    //   </p>
    //   <BlockContent
    //     // style={{ maxWidth: '100px !important'}}
    //     blocks={posts[0].introduction}
    //     // imageOptions={{ w: 300, h: 100, fit: 'max' }}
    //     {...client.config()}
    //   />
    //   {/* <p style={{color: 'white', fontSize: '12px'}}>
    //       {introduction}
    //   </p> */}
    // </div>


     {/* <h1 style={{
                  fontFamily: "Archer SSm A",
                  fontSize: '32px',
                  marginRight: '14vw'
                }}>
                  
                </h1> */}