import Link from 'next/link'
import { FC } from 'react'
import { Switch } from '../switch'
import styles from './Header.module.css'

export const Header: FC<{ isHome?: boolean }> = ({ isHome }) => {
  return (
    <header className={styles.header}>
      {isHome ? (
        <h1>
          <Link href="/">Overreacted</Link>
        </h1>
      ) : (
        <h3>
          <Link href="/">Overreacted</Link>
        </h3>
      )}

      <Switch />
    </header>
  )
}
