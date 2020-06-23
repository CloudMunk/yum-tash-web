import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import DefaultLayout from '../layouts';
import imageUrlBuilder from '@sanity/image-url'
import dessert from '../public/dessert.jpeg';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
    const { 
      posts = [], 
      // mainImage,
      // title = 'Missing title',
      // name = 'Missing name',
      
    } = props
    return (
    <div>
        <DefaultLayout>
          
        </DefaultLayout>
        <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '700px'}}>
          <div>
            <h1 style={{marginTop: '45px', marginLeft: '17%'}}>Yum Tash Food Lovers Home</h1>
            <div style={{
                marginTop: '45px',
                marginLeft: '17%', 
                backgroundColor: '#1C060A', 
                maxWidth: '600px',
                minWidth: '700px',
                minHeight: '350px',
                maxHeight: '350px'
                }}
            >
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>
                  <h3 style={{
                      marginLeft: '-12%',
                      color: 'white',
                    }}>
                      {posts[0].title}</h3>
                  <p>Author: {posts[0].name}</p>
                  <p>{posts[0].introduction}</p>
                  <img
                    style={{marginLeft: '-12%', marginTop: '-70px'}}
                    src={urlFor(posts[0].mainImage)
                      .width(200)
                      .url()}
                  />
                </div>
                <div  style={{color: 'white', padding: '8px 10px'}}>
                  <h2 >
                    Description
                  </h2>
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
      *[_type == "post"]{ introduction, name, mainImage, secondImage, title }
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