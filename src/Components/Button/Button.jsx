import style from './Button.module.css'
const Button = (props) => {
    return(
        <button className={`${style.button}`} onClick={props.changePage}>
            {props.text}
        </button>
    )
}

export default Button