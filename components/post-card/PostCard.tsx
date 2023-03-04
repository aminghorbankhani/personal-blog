import { PreparedPostType } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import styles from './PostCard.module.css'

export const PostCard: FC<PreparedPostType> = ({ id, title, body, date }) => {
  return (
    <article>
      <header>
        <h3 className={styles.title}>
          <Link href={`/${id}`}>{title}</Link>
        </h3>
        <small>{date}</small>
      </header>
      <p className={styles.body}>{body}</p>
    </article>
  )
}
