import { BiEnvelope } from 'react-icons/bi'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { IoSend } from 'react-icons/io5'
import '../../App.css'

// ::: email js ::: //
import React, { useRef } from 'react';
import emailjs from 'emailjs';


const Contact =()=>{

    // email js //
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ktuzcds', form.current, 'user_kQTLNwDrcki75kcBBHXYc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'> Contact Me</h2>
            <span className='section__subtitle'>Get in Touch</span>

            <div className='contact__container container grid'>
                <div>
                    <div className='contact__information'>
                        <FiPhone className='contact__icon'/>

                        <div>
                            <h3 className='contact__title'>Call Me</h3>
                            <a className='contact__subtitle' href='tel:+213799892871'>+213 799892871</a>
                        </div>
                    </div>


                    <div className='contact__information'>
                        <BiEnvelope className='contact__icon'/>

                        <div>
                            <h3 className='contact__title'>Email</h3>
                            <a href='mailto: laloutmehdi@gmail.com' className='contact__subtitle'>Laloutme@gmail.com</a>
                        </div>
                    </div>


                    <div className='contact__information'>
                        <FiMapPin className='contact__icon'/>

                        <div>
                            <h3 className='contact__title'>Location</h3>
                            <span className='contact__subtitle'>Alger - cherage </span>
                        </div>
                    </div>
                    
                </div>

                <from ref={form} onSubmit={sendEmail} action='' className='contact__form grid'>
                    <div className='contact__inputs grid'>
                        <div className='contact__content'>
                            <label for='' className='contact__label'> Name</label>
                            <input type='text' className='contact__input' ></input>
                        </div>

                        
                        <div className='contact__content'>
                            <label for='' className='contact__label'> Email</label>
                            <input type='email' className='contact__input'></input>
                        </div>

                    </div>
                        <div className='contact__content'>
                            <label for='' className='contact__label'>Project</label> 
                            <input type='text' className='contact__input'></input>
                        </div>                    

                    <div className='contact__content'>
                        <label for='' className='contact__label'>Message</label>
                        <textarea name='' id='' cols='0' rows='7' className='contact__input'></textarea>
                    </div>
                    
                    <div>
                        <input type='submit' href='#' className='button button--flex'>
                            Send Your Message
                            <IoSend className='button__icon'/>
                        </input>
                    </div>
                </from>
            </div>
        </section>
    )
}

export default Contact