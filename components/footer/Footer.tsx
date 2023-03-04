import { FC } from 'react'
import styles from './Footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="#">twitter</a>•<a href="#">twitter</a>•<a href="#">twitter</a>
      <a href="#" className={styles.rss}>
        rss
      </a>
    </footer>
  )
}
