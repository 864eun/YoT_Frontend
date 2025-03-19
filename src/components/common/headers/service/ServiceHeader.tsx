import styles from './ServiceHeader.module.scss'
import React, { ReactNode } from 'react';

interface ServiceHeaderProps{
  title?: string ;
  description?: ReactNode;
}

function ServiceHeader({title, description}:ServiceHeaderProps) {
  return (
    <header className={styles.header_container}>
        <div className={styles.title_container}>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </header>
  )
}

export default ServiceHeader
