import style from './LongButton.module.scss'

interface LongButtonProps {
    text : string;
    onClick: () => void; 
    
}

function LongButton({text, onClick}:LongButtonProps) {
  return (
    <div className={style.longbutton_container}>
        <button className={style.longbutton} onClick={onClick}>
            {text}
        </button>
    </div>
  )
}

export default LongButton
