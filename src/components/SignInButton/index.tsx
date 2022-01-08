import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Valdeir Chaves
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color={isUserLoggedIn ? "#04d361" : "#eba417"} />
      Sign in with Github
    </button>
  )
}