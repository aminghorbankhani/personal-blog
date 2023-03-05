import { FC } from 'react'
import styles from './Switch.module.css'

type Props = {
  checked: boolean
  onChange: () => void
}

export const Switch: FC<Props> = ({ checked, onChange }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.slider}></span>
      <span className={styles.knob}></span>
    </label>
  )
}
