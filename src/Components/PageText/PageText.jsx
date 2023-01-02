import styled from 'styled-components'
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
text-align: center;
align-items: center;

& p{
  width: 70%
}
`

const PageText = (props) => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Wrapper>
  );
};
export default PageText;
