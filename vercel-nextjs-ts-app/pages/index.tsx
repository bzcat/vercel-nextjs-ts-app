import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <section className={styles.headingMd}>
          <p>Hoge</p>
        </section>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h2 className={styles.headingLg}>List</h2>
          <ul className={styles.list}>
            <li className={styles.listItem} key='dummy'>
              Todo.ListItem
            </li>
          </ul>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
