import React from "react";
import logo from '../../images/logo.svg';
import styles from './layout.module.css'
export default function Header () {
  return (
    <div className={styles['header-wrapper']}>
      <div className="header-left">
        <img src={logo} className={styles['header-logo']} alt="logo" />
      </div>
      <div className="header-right">admin</div>
    </div>
  )
}