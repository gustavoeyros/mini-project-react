import styled from 'styled-components'

const Button = (props) => {
    const Button = styled.button`
    background-color: #92E3A9;
    border: none;
    color: white;
    width: 308px;
    height: 54px;
    box-shadow: 0px 4px 10px #A1C3FC;
    cursor: pointer;
    `
    return(
        
        <Button  onClick={props.changePage}>
            {props.text}
        </Button>
    )
}

export default Button