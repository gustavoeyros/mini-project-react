import FirstPage from './FirstPage'
import SecondPage from './SecondPage';
import { useState } from 'react';
import ThirdPage from './ThirdPage';



const Page = () =>{
    const [pages, setPages] = useState(1)
    const changePageHandler = () => {
        setPages((prevPage)=>{
            if(prevPage > 3){
                return prevPage - 3
            }
            return prevPage + 1
        })
    }
    return (
        <>
           {(pages == 1 || pages > 3) &&  <FirstPage onChangePage={changePageHandler} />}
           {pages === 2 && <SecondPage onChangePage={changePageHandler} />}
           {pages === 3 && <ThirdPage onChangePage={changePageHandler} />}
        </>
    )
}

export default Page;