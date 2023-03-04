import { Header } from '@/components'
import Head from 'next/head'

export default function Post() {
  return (
    <>
      <Head>
        <title>Post Page</title>
        <meta
          name="description"
          content="A blog created by Amin ghorbankhani"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>Post</main>
    </>
  )
}
