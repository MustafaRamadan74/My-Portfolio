import React from 'react'
import "./About.css"
import img1 from "../../imgs/1.jpg"
import certificate from "../../imgs/FrontEndCert.JPG"

export default function About() {
    return <>

        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className='a-img' src={img1} alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long established fact that a reader will be distracted by the readable content.
                </p>
                <p className='a-desc '>I graduated from faculty of engineering - Geomatics and Geographic Information Systems department -  worked before at many jobs in marketing , graphic design and as a surveyor.
                I looking forward to work as a web developer and GIS developer.</p>
                <div className="award">
                    <img src={certificate} alt="" className="award-img" />
                    <div className='award-text'>
                        <h3 className='award-title'>Front End Development Diploma</h3>
                        <p className="award-desc">proudly i take this certificate for successfully completed the front end development diploma.</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
