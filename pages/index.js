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
        <DefaultLayout>
          
        </DefaultLayout>
        {/* FOLD */}
        <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px'}}>
          <div>
            <h1 style={{marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>
            <div style={{
                marginTop: '45px',
                marginLeft: '17%', 
                backgroundColor: '#1C060A', 
                maxWidth: '50vw',
                minWidth: '50vw',
                minHeight: '350px',
                maxHeight: '350px'
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
                    marginTop: '20px', 
                    backgroundColor: '#226666', 
                    padding: '5px 20px', 
                    minWidth: '24vw',
                    maxWidth: '28vw',
                    maxHeight: '320px'
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
      {/* SECOND PART */}
      <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '500px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <h2 style={{marginRight: '400px'}}>
            SISTE NYTT
          </h2>
            
        </div>
        <img
            style={{maxHeight: '300px', marginLeft: '100px'}}
            src={dessert}
        />
      </div>  
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