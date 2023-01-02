import {Button} from './styled'

const SkipButton = (props) => {
    return(
       <Button  onClick={props.skipInteraction}>
            Skip
       </Button>
    )
}

export default SkipButton