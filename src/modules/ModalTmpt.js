import React, { useEffect, useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'

function ModalTmpt({open, id, CloseModal}) {
    const [Items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {setItems(data.meals);})
    }, [id])
    console.log(Items)
    console.log(id);
  return (
    <div>
        <Modal
            isOpen={open}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                  },
                  content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                  }
            }}>
                <div className=''>
                    <p className='text-red-500 text-2xl font-bold cursor-pointer' style={{right: '10px', position: 'absolute', top: '10px'}} onClick={CloseModal}>
                        X
                    </p>
                    <div className='bg-gray-200 rounded-md md:grid grid-flow-col auto-cols-max'>
                        {Items?.map((item, index)=>{
                            return(
                                <>
                                    <div className='m-3'>
                                        <p className='text-2xl font-bold'>{item.strMeal}</p>
                                        <img className='w-[400px] rounded-lg my-5' src={item.strMealThumb} />
                                    </div>
                                    <div className='w-[700px] mx-3 my-5'>
                                        <p className='text-2xl font-bold'>Instruction</p>
                                        <p className='break-words'>{item.strInstructions}</p>
                                        <p className='my-5 text-2xl font-semibold'>Ingredients</p>
                                        <ul>
                                            <li>- {item.strMeasure1}</li>
                                            <li>- {item.strMeasure2}</li>
                                            <li>- {item.strMeasure3}</li>
                                            <li>- {item.strMeasure4}</li>
                                            <li>- {item.strMeasure5}</li>
                                            <li>- {item.strMeasure6}</li>
                                            <li>- {item.strMeasure7}</li>
                                            <li>- {item.strMeasure8}</li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
        </Modal>
    </div>
  )
}

export default ModalTmpt