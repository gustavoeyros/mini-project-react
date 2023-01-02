import style from './SectionPosition.module.css'
const SectionPosition = (props) => {
    return (
      <div className={`${style.container}`}>
            {props.positionColor == 1 ? <div className={`${style.colorSection}`}></div> : <div></div>}
            {props.positionColor == 2 ? <div className={`${style.colorSection}`}></div> : <div></div>}
            {props.positionColor == 3 ? <div className={`${style.colorSection}`}></div> : <div></div>}
      </div>
    )
}

export default SectionPosition