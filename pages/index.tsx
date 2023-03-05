import Head from 'next/head'
import { Aside, Footer, Header, PostCard } from '@/components'
import moment from 'moment'
import { GetStaticProps, NextPage } from 'next/types'
import { PreparedPostType, PostType } from '@/types'

type Props = {
  posts: Array<PreparedPostType>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = (await res.json()) as Array<PostType>
  const preparedPosts = posts
    .map((post) => {
      const maxDate = Date.now()
      const timestamp = Math.floor((post.id / posts.length) * maxDate)
      const date = new Date(timestamp)

      return { ...post, date }
    })
    .sort((firstPost, secondPost) => +firstPost.date + +secondPost.date)
    .map((post) => ({
      ...post,
      date: moment(post.date).format('MMMM DD, YYYY'),
    }))

  return {
    props: {
      posts: preparedPosts,
    },
  }
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Personal Blog</title>
        <meta
          name="description"
          content="A blog created by Amin ghorbankhani"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isHome />
      <Aside />
      <main>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Home
