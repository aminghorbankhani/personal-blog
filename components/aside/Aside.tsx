import Image from 'next/image'
import { FC } from 'react'
import styles from './Aside.module.css'

export const Aside: FC = () => {
  return (
    <aside className={styles.aside}>
      <Image
        className={styles.image}
        width={56}
        height={56}
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        alt="overreacted"
      />
      <div className={styles.info}>
        <p>
          Personal blog by <a href="#">Dan Abramov</a>.
        </p>
        <p>I explain with words and code.</p>
      </div>
    </aside>
  )
}
