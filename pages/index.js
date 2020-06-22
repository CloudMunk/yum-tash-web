import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import DefaultLayout from '../layouts';

import img from '../public/dessert.jpeg';



const Index = (props) => {
    const { posts = [] } = props
    return (
    <div>
        <DefaultLayout>
          
        </DefaultLayout>
        <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '500px', display: 'flex', justifyContent: 'space-evenly'}}>
          <div>
            <h1 style={{marginTop: '45px'}}>Yum Tash Food Lovers Home</h1>
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
          </div>
          {/* <img
              style={{maxHeight: '300px', marginTop: '45px'}}
              src={img}
            /> */}
      </div>
      <div style={{backgroundColor: '#E0ECF7', margin: '0 auto', width: '80%', height: '500px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <h2 style={{marginRight: '400px'}}>
            SISTE NYTT
          </h2>
            
        </div>
        <img
            style={{maxHeight: '300px', marginLeft: '100px'}}
            src={img}
        />
      </div>  
    </div>
      
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Index