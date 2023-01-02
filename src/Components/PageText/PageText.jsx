import {Wrapper} from './styled'
const PageText = (props) => {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Wrapper>
  );
};
export default PageText;
