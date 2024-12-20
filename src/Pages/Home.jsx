import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { cartContext } from '../MainContext';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {

    let [products, setProducts] = useState([])
    let getProducts = () => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => res.data)
            .then((finalres) => {
                setProducts(finalres.products)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])




    return (
        <div>
            <ToastContainer />
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='text-3xl font-bold py-5 text-center'>Our Product</h1>

                <div className="bg-white">
                    <div className="mx-auto ">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <ProductCard product={product} />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCard({ product }) {
    let { cart, setCart } = useContext(cartContext)

    let { title, thumbnail, id, category, price } = product

    let checkMyProduct = cart.filter((items) => items.pid == id)


    let addToCart = () => {
        let obj = {
            pid: id,
            thumbnail,
            price,
            title,
            Qty: 1
        }
        let cartOldData = [...cart]
        cartOldData.push(obj)
        setCart(cartOldData)
        toast.success('Product Added in cart')
    }

    let removeCart = () => {
        if (confirm("Are you sure you want to delete")) {
            let filterData = cart.filter((items) => items.pid != id);
            setCart(filterData)
            toast.warning('Product Remove from Cart')
        }
    }
    return (
        <div key={product.id} className="group relative shadow-lg lg:px-0 px-4">
            <img
                alt={product.imageAlt}
                src={product.thumbnail}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between px-3">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                            <span aria-hidden="true" className="" />
                            {product.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
            {checkMyProduct.length == 1
                ?
                <button onClick={removeCart} className='bg-red-500 text-white p-[10px_15px] my-2 rounded mx-2'>Remove Cart</button>
                :
                <button onClick={addToCart} className='bg-green-500 text-white p-[10px_15px] my-2 rounded mx-2'>Add to Cart</button>
            }

        </div>
    )
}