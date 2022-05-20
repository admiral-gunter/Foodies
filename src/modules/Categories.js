import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AppContext} from '../routes/router'
import AppBar from './AppBar'
import ModalTmpt from './ModalTmpt'
function Categories() {
    const [CategoryData, setCategoryData] = useState([])
    const [Category, setCategory] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [id, setid] = useState()
    const {cate} = useContext(AppContext)
    const params = useParams()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
        .then(response => response.json())
        .then(data => setCategoryData(data.meals))
    }, [params.id])
    console.log(CategoryData)
    const CloseModal = ()=>{
        setOpenModal(false)
        setid()
    }
    console.log(params)
  return (
    <>
    <AppBar />
    <div className='p-1 bg-gray-200'>
        <div className='grid grid-flow-col auto-cols-max'>
            <select className='w-[200px] border rounded-md p-2' onChange={e=>setCategory(e.target.value)}>{cate.map((item, index)=>{
                return(
                    <option key={index} value={item.strCategory}>{item.strCategory}</option>
                )
            })}
            </select>
            <p className='ml-2 bg-green-500 rounded-md p-2 w-fit text-white' onClick={e=>setCategory('')}>Reset</p>
        </div>
        <div className='grid grid-cols-4 gap-1 mx-10'>
            {CategoryData?.map((item, index)=>{
                return(
                    <div onClick={e=>{setOpenModal(true); setid(item.idMeal)}}  key={index} className='w-[100px] md:w-[300px] md:h-[300px] w-auto h-auto  shadow-lg cursor-pointer m-3 rounded-lg'  style={{
                        backgroundImage:`url(${item.strMealThumb})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className='bg-black bg-opacity-40 p-4 w-full h-full rounded-md hover:bg-opacity-50 transition-all duration-1000'>
                            <p className='text-white my-20 font-bold text-2xl'  style={{textAlign: 'center'}}>{item.strMeal}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    <ModalTmpt open={openModal} id={id} CloseModal={CloseModal}/>
    </>  
  )
}

export default Categories