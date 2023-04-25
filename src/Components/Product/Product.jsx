import React from 'react'
import "./Product.css"
import project1 from "../../imgs/project1.png"
import QuizApp from "../../imgs/QuizApp.png"
import project3 from "../../imgs/project3.png"
import levillingApp from "../../imgs/levillingApp.png"
import traverseAdj from "../../imgs/traverseAdjustment.png"
import PharmacyCRUD from "../../imgs/PharmacyCRUD.png"
import Yummy from "../../imgs/Yummy.png"
import caravan from "../../imgs/caravanStore.png"
import Trending from "../../imgs/Trending.png"

export default function Product() {
    return <>

        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/Trending/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={Trending} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://github.com/MustafaRamadan74"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={caravan} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/Yummy/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={Yummy} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://github.com/MustafaRamadan74"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={project3} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/Levelling-app/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={levillingApp} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/pharmacy/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={PharmacyCRUD} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/Traverse-Adjustment/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={traverseAdj} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://github.com/MustafaRamadan74"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={project1} alt="it's a project" />
            </a>
        </div>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={"https://mustafaramadan74.github.io/Quiz-App/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={QuizApp} alt="it's a project" />
            </a>
        </div>


    </>
}
