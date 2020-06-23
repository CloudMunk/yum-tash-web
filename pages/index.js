import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'

import DefaultLayout from '../layouts';
import imageUrlBuilder from '@sanity/image-url'
import dessert from '../public/dessert.jpeg';


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
    const { 
      introduction = [],
      posts = [], 
      name 
    } = props
    return (
    <div>
        <DefaultLayout />
        {/* FOLD */}
        <div style={{
            backgroundColor: '#E0ECF7', 
            margin: '0 auto', 
            width: '80vw', 
            height: '40vw', 
           
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '26.6vw 26.6vw 26.6vw',
            backgroundColor: '#E0ECF7',
            color: '#444'
          }}>
            {/* THIS IS A */}
            <div style={{
                  gridColumn: '1 / 3',
                  gridRow: '1',
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #D9D9D9',
                  borderRight: '1px solid #D9D9D9'
                }}>
                <h1 style={{
                  fontFamily: "Archer SSm A",
                  fontSize: '32px',
                  marginRight: '14vw'
                }}>
                  Yum Tash Food Lovers Home
                </h1>
            </div>
            <div style={{
                  gridColumn: '3',
                  gridRow:' 1',
                  minHeight: '200px',
                  display: 'flex',
                  borderBottom: '1px solid #D9D9D9'
                }}>
              <h3
                style={{
                  marginTop: '4vw',
                  paddingTop: '16px',
                  fontFamily: "Archer SSm A",
                  fontSize: '17px',
                  textAlign: 'center',
                  paddingLeft: '15%',
                  paddingRight: '15%',
                  letterSpacing: '0.19em',
                  fontWeight: '900',
                  lineHeight: '1.6em'
                }}
              >
                A food blog with fresh, zesty recipes.
              </h3>
            </div>
            {/* Card */}
              <div style={{
                gridColumn: '1 / 3',
                gridRow: '3',
              }}>
                <div>
                  <div style={{
                      marginBottom: '2vw',
                      marginLeft: '2vw', 
                      backgroundColor: '#1C060A',
                      marginTop: '2vw', 
                      maxWidth: '50vw',
                      minWidth: '50vw',
                      minHeight: '20vw',
                      maxHeight: '20vw',
                      // borderRadius: '10px'
                      }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                      <div>
                        <h3 style={{
                              marginLeft: '10px',
                              color: 'white'
                            }}
                          >
                            {posts[0].title}
                        </h3>
                        
                        <img
                          style={{marginLeft: '10px', marginTop: '30px'}}
                          src={urlFor(posts[0].mainImage)
                            .width(200)
                            .url()}
                        />
                      </div>
                      {/* CARD */}
                      <div  style={{
                          color: 'white', 
                          marginTop: '1.5vw', 
                          backgroundColor: '#226666', 
                          padding: '5px 20px', 
                          minWidth: '24vw',
                          maxWidth: '28vw',
                          maxHeight: '320px',
                          borderRadius: '10px'
                          }}
                        >
                        <h2>
                          Description
                        </h2>
                        <p style={{color: 'white'}}>
                          Author: {posts[0].name}
                        </p>
                        <BlockContent
                          // style={{ maxWidth: '100px !important'}}
                          blocks={posts[0].introduction}
                          // imageOptions={{ w: 300, h: 100, fit: 'max' }}
                          {...client.config()}
                        />
                        {/* <p style={{color: 'white', fontSize: '12px'}}>
                            {introduction}
                        </p> */}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>  
      {/* SECOND PART */}
      {/* <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '500px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <h2 style={{marginRight: '400px'}}>
            SISTE NYTT
          </h2>
            
        </div>
        <img
            style={{maxHeight: '300px', marginLeft: '100px'}}
            src={dessert}
        />
      </div>   */}
    </div>
      
    )
}
// Post.getInitialProps = async function (context) {

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post"]{
        introduction, 
        mainImage, 
        secondImage, 
        title, 
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