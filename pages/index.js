import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import DefaultLayout from '../layouts';

const Index = (props) => {
    const { posts = [] } = props
    return (
      <DefaultLayout>
        <h1>Yum Tash Food Lovers Home</h1>
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
      </DefaultLayout>
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Index