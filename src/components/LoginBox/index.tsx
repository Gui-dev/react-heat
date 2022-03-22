import React, { useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import styles from './login.module.scss'
import { useAuth } from '../../hooks/useAuth'

export const LoginBox = () => {
  const clientId = 'f8ef90cfffd1c1f9c0bc'
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`
  const { signIn } = useAuth()

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')
      window.history.pushState({}, '', urlWithoutCode)

      signIn(githubCode)
    }
  }, [signIn])

  return (
    <section className={styles.loginBoxWrapper}>
      <h1>Entre e compartilhe sua mensagem</h1>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24}/>
        Entrar com Github
      </a>
    </section>
  )
}
