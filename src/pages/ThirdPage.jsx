import thirdImage from '../assets/third-page.svg'
import PageText from '../Components/PageText/PageText';
import Button from '../Components/Button/Button';
import SkipButton from '../Components/SkipButton/SkipButton';
import Sectionposition from '../Components/SectionPosition/SectionPosition';

const ThirdPage = (props) =>{
    const title = "Buy & Sell Tools"
    const desc = "Buy & sell good quality products for your beautiful plants"
    return (
        <>
           <figure>
            <img src={thirdImage} />
           </figure>
           <PageText title={title} description={desc}/>
           <Sectionposition />
           <Button/>
           <SkipButton />
        </>
    )
}

export default ThirdPage;