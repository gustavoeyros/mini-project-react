import style from './PageText.module.css'

const PageText = (props) => {
  return (
    <div className={`${style.textContainer}`}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default PageText;
