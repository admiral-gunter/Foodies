import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../modules/Categories'
import Home from '../modules/Home'
export const AppContext = createContext(null)
export default function Router() {
    const [cate, setCate] = useState([])
    return (
        <AppContext.Provider value={{cate, setCate}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Categories />} />
                <Route exact path="/category/:id" element={<Categories />} />
            </Routes>
        </AppContext.Provider>
    )
}