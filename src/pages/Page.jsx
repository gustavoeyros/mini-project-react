import PageText from '../Components/PageText/PageText'
import SectionPosition from '../Components/SectionPosition/SectionPosition'
import Button from '../Components/Button/Button'
import SkipButton from '../Components/SkipButton/SkipButton'
//images
import firstImage from '../assets/first-page.svg'
import secondImage from '../assets/second-page.svg'
import thirdImage from '../assets/third-page.svg'
import { useState } from 'react';




const Page = (props) =>{
    const [pages, setPages] = useState(1)
    const changePageHandler = () => {
        setPages((prevPage)=>{
            if(prevPage === 3){
                return prevPage - 2
            }
            return prevPage + 1
        })
    }
    const skipBtn = () => {
        setPages(3)
    }
    return (
        <>
        {(pages == 1 || pages > 3) && 
        <>                                  
           <figure>
            <img src={firstImage} />
           </figure>
           <PageText title={'Plant lover Community'} description={'Find gardening enthusiasts from all over the world'}/>
           <SectionPosition positionColor={pages}/>
           <Button changePage={changePageHandler} text={'Continue'}/>
           <SkipButton skipInteraction={skipBtn}/>
        </>
        }

        {pages == 2 && 
        <>                                  
           <figure>
            <img src={secondImage} />
           </figure>
           <PageText title={'Get fast & safe delivery'} description={'Get good quality products for your plants'}/>
           <SectionPosition positionColor={pages}/>
           <Button changePage={changePageHandler} text={'Continue'}/>
           <SkipButton skipInteraction={skipBtn}/>
        </>
        }

         {pages == 3 && 
        <>                                  
           <figure>
            <img src={thirdImage} />
           </figure>
           <PageText title={'Buy & Sell Tools'} description={'Buy & sell good quality products for your beautiful plants'}/>
           <SectionPosition positionColor={pages}/>
           <Button changePage={changePageHandler} text={'Get started'}/>
        </>
        }
        </>
    )
}

export default Page;