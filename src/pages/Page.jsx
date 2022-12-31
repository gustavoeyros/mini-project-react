import FirstPage from './FirstPage'
import SecondPage from './SecondPage';
import { useState } from 'react';
import ThirdPage from './ThirdPage';



const Page = () =>{
    const [pages, setPages] = useState(1)
    const title = "Plant lover Community"
    const desc = "Find gardening enthusiasts from all over the world"
    
    const changePageHandler = () => {
        setPages((prevPage)=>{
            return prevPage + 1
        })
    }
    return (
        <>
           {pages === 1 &&  <FirstPage onChangePage={changePageHandler} />}
           {pages === 2 && <SecondPage onChangePage={changePageHandler} />}
           {pages === 3 && <ThirdPage />}
        </>
    )
}

export default Page;