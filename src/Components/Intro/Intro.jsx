import React from 'react'
import "./Intro.css"
import me from '../../imgs/mePortfolio.png'

export default function Intro() {
    return <>

        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My Name Is </h2>
                    <h1 className='i-name'>Mustafa Ramadan</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">
                                Web Developer
                            </div>
                            <div className="title-item">
                                GIS Engineer
                            </div>
                            <div className="title-item">
                                Surveying Engineer
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, online stores.
                    </div>
                    
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img className='i-img' src={me} alt="" />


            </div>
        </div>
    </>;
}
