import { FC } from 'react'
import styles from './Switch.module.css'

export const Switch: FC = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" className={styles.input} />
      <span className={styles.slider}></span>
      <span className={styles.knob}></span>
    </label>
  )
}
