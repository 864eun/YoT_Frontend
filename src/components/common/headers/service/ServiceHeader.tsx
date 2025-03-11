import styles from './ServiceHeader.module.scss'

interface ServiceHeaderProps{
  title: string | undefined;
  description: string | undefined;
}

function ServiceHeader({title, description}:ServiceHeaderProps) {
  return (
    <header className={styles.header_container}>
        <div className={styles.main_container}>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </header>
  )
}

export default ServiceHeader
