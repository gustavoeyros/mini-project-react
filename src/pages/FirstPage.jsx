import firstImage from '../assets/first-page.svg'
import PageText from '../Components/PageText/PageText';
import Button from '../Components/Button/Button';
import SkipButton from '../Components/SkipButton/SkipButton';
import Sectionposition from '../Components/SectionPosition/SectionPosition';

const FirstPage = (props) =>{
    const title = "Plant lover Community"
    const desc = "Find gardening enthusiasts from all over the world"
    return (
        <>
           <figure>
            <img src={firstImage} />
           </figure>
           <PageText title={title} description={desc}/>
           <Sectionposition />
           <Button changePage={props.onChangePage}/>
           <SkipButton />
        </>
    )
}

export default FirstPage;