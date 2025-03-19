import style from './NextButton.module.scss'

interface NextButtonProps {
    text : string;
}

function NextButton({text}:NextButtonProps) {
  return (
    <div className={style.nextbutton_container}>
        <button className={style.nextbutton}>
            {text}
        </button>
    </div>
  )
}

export default NextButton
