import style from './SkipButton.module.css'

const SkipButton = (props) => {
    return(
       <button className={`${style.button}`} onClick={props.skipInteraction}>
            Skip
       </button>
    )
}

export default SkipButton