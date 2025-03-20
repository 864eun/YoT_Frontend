import style from './LongButton.module.scss'

interface LongButtonProps {
    text : string;
}

function LongButton({text}:LongButtonProps) {
  return (
    <div className={style.longbutton_container}>
        <button className={style.longbutton}>
            {text}
        </button>
    </div>
  )
}

export default LongButton
