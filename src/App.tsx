import React from 'react'

import styles from './assets/styles/app.module.scss'

import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { useAuth } from './hooks/useAuth'

function App () {
  const { user } = useAuth()

  return (
    <main className={`${styles.contentWrapper} ${user ? styles.contentSigned : ''}`}>
      <MessageList />
      {
        user ? <SendMessageForm /> : <LoginBox />
      }
    </main>
  )
}

export default App
