import style from './Overlay.module.scss'

interface OverlayProps {
    isOpen : boolean 
}

function Overlay({isOpen}:OverlayProps) {
  return (
    <div className={`${isOpen ? style.overlay_contaner: ""}`}>
        <div className={style.overlay}>
        </div>
    </div>
  )
}

export default Overlay
