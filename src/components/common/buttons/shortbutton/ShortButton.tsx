import style from './ShortButton.module.scss';

interface ShortButtonProps{
    time : string;
}

function ShortButton({time}:ShortButtonProps) {
  return (
    <div className={style.shortbutton_container}>
        <button className={style.shorthbutton}>
            {time}
        </button>
    </div>
  )
}

export default ShortButton
