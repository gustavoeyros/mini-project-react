import {ButtonStyle} from './styled'
const Button = (props) => {
    return(
        
        <ButtonStyle onClick={props.changePage}>
            {props.text}
        </ButtonStyle>
    )
}

export default Button