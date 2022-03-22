import React from 'react'

import styles from './assets/styles/app.module.scss'

import { AuthProvider } from './contexts/auth'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

function App () {
  return (
    <AuthProvider>
      <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
      </main>
    </AuthProvider>
  )
}

export default App
