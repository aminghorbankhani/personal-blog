import { FC, useLayoutEffect } from 'react'
import styles from './Layout.module.css'
import { Merriweather, Montserrat } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import { darken, lighten, RootState } from '@/store'
import { Header } from '../header'
import { useRouter } from 'next/router'

const maria = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-maria',
})
const mont = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

type Props = {
  children: JSX.Element
}

export const Layout: FC<Props> = ({ children }) => {
  const theme = useSelector<RootState>((state) => state.theme.value)
  const dispatch = useDispatch()
  const { asPath } = useRouter()
  const isHome = asPath === '/'
  const isDark = theme === 'dark'

  useLayoutEffect(() => {
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
      document.body.classList.add('dark')
      dispatch(darken())
    }
  }, [])

  const onSwitchChange = () => {
    if (theme === 'dark') {
      dispatch(lighten())
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
    } else {
      dispatch(darken())
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
    }
  }

  return (
    <div className={`${styles.container} ${maria.variable} ${mont.variable}`}>
      <Header
        isHome={isHome}
        onSwitchChange={onSwitchChange}
        switchChecked={isDark}
      />
      {children}
    </div>
  )
}
