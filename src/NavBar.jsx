import React from 'react'
import styles from './Navbar.module.css'


export default function NavBar() {
  return (
    <div >
    <nav  className={styles.nav}>

      <img src='nick.jpg' alt='logo' width='60'/>
      <ul >
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className={styles.button}>Login</button>
      </nav>
    </div>
  )
}
