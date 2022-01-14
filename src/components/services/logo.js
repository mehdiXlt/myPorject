import './service.css'

// ::: icon ::: //
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FaOpencart } from 'react-icons/fa'
import {SiHomebridge} from 'react-icons/si'
import { IoSend } from 'react-icons/io5'
import Footer from '../home/footer'

import { useNavigate } from 'react-router-dom'

const LogoCreator =()=>{

    const navigate = useNavigate()
    
    return(
        <section className='Logo__section section'>
                <h3 className='logo__title'> LOGO creator</h3>
                <span className='logo__subtitle'> I'll create the logo that best <br />represents you</span>
            <div className='logo__container'> 

                <div className='logo__content'>
                    <span className='logo__content-title'> here is some example :</span>

                    <div className='logo__example'> 
                        <span className='logo__name'> Fast Market</span>
                        <span className='logo__arrow'> <HiArrowNarrowRight /></span>
                        <span className='logo__logo'> <FaOpencart /> </span>
                    </div>

                    <div className='logo__example'>
                        <span className='logo__name'> Home For You </span>
                        <span className='logo__arrow'> <HiArrowNarrowRight /></span>
                        <span className='logo__logo'> <SiHomebridge /> </span>
                    </div>
                </div>

                <div className='logo__data'>
                    <span className='logo__data-title'> Create your's now</span>

                    <div className='logo__input'>
                        <input type='text' placeholder='company' className='logo__inputs'></input>
                        <input type='text' placeholder='information ' className='logo__inputs2'></input>
                        <button className='logo__button '> send <IoSend className='button__icon'/> </button>
                    </div>
                    
                </div>
            </div>

                <span className='back__home' onClick={()=>{
                    navigate(`/`)
                }}> <HiArrowNarrowLeft /> </span>

            <Footer />
        </section>
    )
}

export default LogoCreator