import {Wrapper} from './styled'
import styled from 'styled-components'
const SectionPosition = (props) => {
  const ColorSection = styled.div`
  ${props.positionColor === 1
    ? "&:first-child{background: #92E3A9;; border: none};"
    : ""}
  ${props.positionColor === 2
    ? "&:nth-child(2) {background: #92E3A9;; border: none"
    : ""}
${props.positionColor === 3
    ? "&:last-child {background: #92E3A9;; border: none"
    : ""}
`;
    return (
      <Wrapper>
           <ColorSection />
           <ColorSection  />
           <ColorSection />
      </Wrapper>
    )
}

export default SectionPosition