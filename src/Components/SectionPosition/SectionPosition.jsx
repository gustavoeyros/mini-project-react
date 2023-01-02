import {Wrapper, ColorSection} from './styled'
const SectionPosition = (props) => {
    return (
      <Wrapper>
           <ColorSection positionColor = {props.positionColor}/>
           <ColorSection positionColor = {props.positionColor}/>
           <ColorSection positionColor = {props.positionColor}/>
      </Wrapper>
    )
}

export default SectionPosition