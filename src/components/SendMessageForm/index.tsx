import React, { FormEvent, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'

import styles from './send-message.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

export const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const { user, signOut } = useAuth()

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault()
    if (!message.trim()) {
      return
    }
    await api.post('/messages', { message })
    setMessage('')
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <section className={styles.sendMessageFormWrapper}>
      <button onClick={ handleSignOut } className={styles.signOutButton}>
        <VscSignOut size={ 32 }/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} title={user?.name}/>
        </div>
        <h1 className={styles.userName}>{user?.name}</h1>
        <span className={styles.userGithub}>
          <VscGithubInverted size={ 16 }/>
          { user?.login }
        </span>
      </header>

      <form onSubmit={ handleSendMessage } className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual é sua expectativa para o evento ?"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <button>
          Enviar mensagem
        </button>
      </form>
    </section>
  )
}
