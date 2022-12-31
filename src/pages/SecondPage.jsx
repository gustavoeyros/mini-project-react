import secondImage from '../assets/second-page.svg'
import PageText from '../Components/PageText/PageText';
import Button from '../Components/Button/Button';
import SkipButton from '../Components/SkipButton/SkipButton';
import Sectionposition from '../Components/SectionPosition/SectionPosition';

const SecondPage = (props) =>{
    const title = "Get fast & safe delivery"
    const desc = "Get good quality products for your plants"
    return (
        <>
           <figure>
            <img src={secondImage} />
           </figure>
           <PageText title={title} description={desc}/>
           <Sectionposition />
           <Button changePage={props.onChangePage}/>
           <SkipButton />
        </>
    )
}

export default SecondPage;