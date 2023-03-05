import { PostType, PreparedPostType } from '@/types'
import moment from 'moment'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import styles from '@/styles/Post.module.css'

type Props = {
  post: PreparedPostType
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = (await res.json()) as Array<PostType>

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  )
  const post = (await res.json()) as PostType
  const maxDate = Date.now()
  const timestamp = Math.floor((post.id / 100) * maxDate)
  const date = new Date(timestamp)
  const preparedPost = {
    ...post,
    date: moment(date).format('MMMM DD, YYYY'),
  }

  return {
    props: {
      post: preparedPost,
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="A blog created by Amin ghorbankhani"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article>
          <header>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
          </header>
        </article>
        <div>
          <p>{post.body}</p>
        </div>
      </main>
    </>
  )
}

export default Post
