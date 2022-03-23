import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import styles from './message-list.module.scss'
import logoImg from './../../assets/images/logo.svg'
import { api } from './../../services/api'

interface MessageProps {
  id: string
  text: string
  created_at: string
  user: {
    id: string
    github_id: string
    name: string
    login: string
    avatar_url: string
  }
}

const messageQueue: MessageProps[] = []

const socket = io('http://localhost:3333')

socket.on('new_message', (message: MessageProps) => {
  messageQueue.push(message)
})

export const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messageQueue.length > 0) {
        setMessages(prevState => [
          messageQueue[0],
          prevState[0],
          prevState[1]
        ].filter(Boolean))

        messageQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api.get('/messages/last-messages')
      .then(response => setMessages(response.data))
  }, [])

  return (
    <section className={styles.messageListWrapper}>
      <img src={logoImg} alt="Do While 2021" title="Do WHile 2021"/>

      <ul className={styles.messageList}>
        { messages && messages.map(message => {
          return (
              <li key={ message.id } className={styles.message}>
                <p className={styles.messageContent}>
                  { message.text }
                </p>
                <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                    <img src={ message.user.avatar_url } alt={ message.user.name } title={ message.user.name }/>
                  </div>
                  <h1>{ message.user.name }</h1>
                </div>
              </li>
          )
        })
        }
      </ul>
    </section>
  )
}
