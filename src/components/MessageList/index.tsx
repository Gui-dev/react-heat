import React from 'react'

import styles from './message-list.module.scss'
import logoImg from './../../assets/images/logo.svg'

export const MessageList: React.FC = () => {
  return (
    <section className={styles.messageListWrapper}>
      <img src={logoImg} alt="Do While 2021" title="Do WHile 2021"/>

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certza vai ser o melhor de todos.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
            </div>
            <h1>Gui Silva</h1>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certza vai ser o melhor de todos.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
            </div>
            <h1>Gui Silva</h1>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certza vai ser o melhor de todos.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Gui-dev.png" alt="Gui Silva" />
            </div>
            <h1>Gui Silva</h1>
          </div>
        </li>
      </ul>
    </section>
  )
}
