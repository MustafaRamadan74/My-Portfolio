import React from 'react'
import "./ProductList.css"
import Product from '../Product/Product'

export default function ProductList() {
    return <>

        <div className="pl">
            <div className="pl-text">
                <h1 className='pl-title'>create & inspire. It's Mustafa</h1>
                <p className='pl-desc'>This is a creative portfolio that your work has been waiting for. Beautiful homes, Stunning portfolio styles & a whole lot more awaits inside.</p>
            </div>
            <div className="pl-list">
                    <Product/>
            </div>
        </div>
    </>
}
