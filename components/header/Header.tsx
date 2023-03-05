import Link from 'next/link'
import { FC } from 'react'
import { Switch } from '../switch'
import styles from './Header.module.css'

type Props = {
  isHome: boolean
  switchChecked: boolean
  onSwitchChange: () => void
}

export const Header: FC<Props> = ({
  isHome,
  switchChecked,
  onSwitchChange,
}) => {
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

      <Switch checked={switchChecked} onChange={onSwitchChange} />
    </header>
  )
}
