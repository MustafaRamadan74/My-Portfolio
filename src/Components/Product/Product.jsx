import React from 'react';
import "./Product.css";
import project1 from "../../imgs/project1.png";
import QuizApp from "../../imgs/QuizApp.png";
import project3 from "../../imgs/project3.png";
import levillingApp from "../../imgs/levillingApp.png";
import traverseAdj from "../../imgs/traverseAdjustment.png";
import PharmacyCRUD from "../../imgs/PharmacyCRUD.png";
import Yummy from "../../imgs/Yummy.png";
import caravan from "../../imgs/caravanStore.png";
import Trending from "../../imgs/Trending.png";
import Routing2 from "../../imgs/routing2.JPG";
import Routing3 from "../../imgs/routing3.JPG";
import Routing4 from "../../imgs/routing4.JPG";
import Ecommerce1 from "../../imgs/CSHome.png";


export default function Product() {
    return <>

        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <p className='mx-4 my-auto text-dark fw-bolder'>Routing App</p>
            </div>
            <a href={"https://mustafaramadan74.github.io/Routing-App/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={Routing2} alt="it's a project" />
                <img className='img-project' src={Routing3} alt="it's a project" />
                <img className='img-project' src={Routing4} alt="it's a project" />
            </a>
        </div>

        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <p className='mx-4 my-auto text-dark fw-bolder'>E-Commerce</p>
            </div>
            <a href={"https://mustafaramadan74.github.io/E-Commerce-Caravan-Store//"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={Ecommerce1} alt="it's a project" />
            </a>
        </div>

        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <p className='mx-4 my-auto text-dark fw-bolder'>Trending</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Caravan Store</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Yummy</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Portfolio</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Levelling calculator</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Project Management System</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Traverse Adjustment</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Portfolio</p>
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
                <p className='mx-4 my-auto text-dark fw-bolder'>Quiz App</p>
            </div>

            <a href={"https://mustafaramadan74.github.io/Quiz-App/"} target="_blank" rel='noreferrer'>
                <img className='img-project' src={QuizApp} alt="it's a project" />
            </a>
        </div>


    </>
}
