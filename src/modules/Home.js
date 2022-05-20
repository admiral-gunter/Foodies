import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AppContext} from '../routes/router'
import AppBar from './AppBar'
import { useMediaQuery } from 'react-responsive'

function Home() {
    const [Items, setItems] = useState([])
    const isSmollScreen = useMediaQuery({ query: '(max-width: 800px)' })
    const {setCate} = useContext(AppContext)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {setItems(data.categories); setCate(data.categories)})
    }, [])
    


  return (
    <>
    <AppBar />
    <div className='p-5'>
        <div className={isSmollScreen ? 'grid grid-cols-1 gap-1' : 'grid grid-cols-4 gap-1 '}>
            {Items.map((item, index)=>{
                return(
                <Link to={`/category/${item.strCategory}`}>
                    <div key={index} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] w-auto h-auto  shadow-lg cursor-pointer m-3' 
                    style={{
                        backgroundImage:`url(${item.strCategoryThumb})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        }}>
                        <div className='bg-black bg-opacity-40 p-4 w-full h-full rounded-md hover:bg-opacity-50 transition-all duration-1000'>
                            <div className='text-white my-[100px] text-2xl' style={{textAlign: 'center'}} >
                                <p className='font-bold'>{item.strCategory}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )})}
        </div>
    </div>
    </>
  )
}

export default Home