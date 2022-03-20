import React from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import styles from './login.module.scss'

export const LoginBox: React.FC = () => {
  return (
    <section className={styles.loginBoxWrapper}>
      <h1>Entre e compartilhe sua mensagem</h1>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size={24}/>
        Entrar com Github
      </a>
    </section>
  )
}
