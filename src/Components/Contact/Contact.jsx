import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context';

export default function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    function handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('service_y9zeyy8', 'template_2f938zg', formRef.current, 'bPZnFPsWLnkqJGHXm')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return <>

        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="title">let's discuss your project</h1>
                    <div className="info">
                        <div className="info-item">
                            <i class="fa-solid fa-phone-volume fa-2x text-warning"></i>
                            <div className='h4'>+201557227144</div>
                        </div>
                        <div className="info-item">
                            <i class="fa-brands fa-square-whatsapp fa-2x text-warning"></i>
                            <div className='h4'>+201015950011</div>
                        </div>
                        <div className="info-item">
                            <i class="fa-solid fa-envelope fa-2x text-warning"></i>
                            <div className='h4'>mafroto74@gmail.com</div>
                        </div>
                        <div className="info-item">
                            <i class="fa-solid fa-location-dot fa-2x text-warning"></i>
                            <div className='h4'>Cairo, Egypt</div>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="desc">
                        <b>What's your story ?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#444" }} className='form-control mb-4' type="text" placeholder='Your Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#444" }} className='form-control mb-4' type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#444" }} className='form-control mb-4' type="Email" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#444" }} className='form-control mb-4' name="message" rows="5" placeholder='Your Message'></textarea>
                        <div className="text-center">
                            <button className='btn btn-warning px-5 py-2' >Submit</button>
                        </div>
                        {done && "Thank you for connecting ....."}
                    </form>
                </div>
                
            </div>

        </div>

        <div className="contact-links d-flex ">
                    <div className="c-links ">
                        <a className='text-warning' href="https://github.com/MustafaRamadan74" target={"_blank"} rel='noreferrer'>
                            <i class="fa-brands fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div className="c-links">
                        <a className='text-warning' href="https://www.linkedin.com/in/mustafa-ramadan-8a232315b/" target={"_blank"} rel='noreferrer'>
                            <i class="fa-brands fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <div className="c-links">
                        <a className='text-warning' href="https://www.instagram.com/mustafa.r_74/" target={"_blank"} rel='noreferrer'>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>

    </>
}
