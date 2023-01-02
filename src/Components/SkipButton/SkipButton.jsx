import styled from 'styled-components'

const SkipButton = (props) => {
    const Button = styled.button`
    font-size: 18px;
    color: #92E3A9;
    background-color: transparent;
    border: none;
    cursor: pointer;`
    
    return(
       <Button  onClick={props.skipInteraction}>
            Skip
       </Button>
    )
}

export default SkipButton