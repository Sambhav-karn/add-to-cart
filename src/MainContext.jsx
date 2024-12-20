import React, { createContext, useEffect, useState } from 'react'

export let cartContext = createContext()

export default function MainContext({ children }) {
    let [count,setCount] = useState(0)
    let [cart,setCart] = useState(JSON.parse(localStorage.getItem("CART")) ?? [])//JSON.parse(localStorage.getItem("CART")) ?? [])

    let obj = {count,setCount,cart,setCart}

    useEffect(()=>{
        localStorage.setItem("CART",JSON.stringify(cart))
    },[cart])
    return (
        <div>
            <cartContext.Provider value={obj}>
                {children}
            </cartContext.Provider>
        </div>
    )
}
