import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './HeroeButtonBack.module.css'


export const HeroeButtonBack = () => {
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);

  }
  return (
    <a href='#' className={styles.btn_back} onClick={handleBack}>Back</a>
  )
}
