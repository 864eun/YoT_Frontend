import style from './MoreButton.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MoreButton() {
  return (
    <div className={style.morebutton_container}>
        <span>더보기</span>
        <ArrowForwardIcon />
    </div>
  )
}

export default MoreButton
