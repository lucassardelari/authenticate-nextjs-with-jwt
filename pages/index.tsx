import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSumit() {
    const data = {
      email,
      password
    }

    console.log(data)
  }

  return (
    <div className={styles.container}>
      <input type="email"  value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Entrar</button>
    </div>
  )
}
