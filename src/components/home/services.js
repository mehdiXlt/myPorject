import '../../App.css'
import {HiOutlinePencil} from 'react-icons/hi'
import {FaArrowRight, FaTimes} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import {FiCode} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Services =()=>{


    const navigate = useNavigate()
    
    return(
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className='services__container container grid'>
                {/* === */}
                <div className='services__content' onClick={()=>{
                    navigate(`/lOGO`)
                }}>
                    <div>
                        <HiOutlinePencil className='services__icon'/>
                        <h3 className='services__title'> LOGO <br /> creator</h3>
                    </div>

                    <span className='button button--flex button--small button--link serices__button'>
                        View More
                        <FaArrowRight className='button__icon'/>
                    </span>
                </div>

                 {/* === */}
                 <a className='services__content' href='#contact' >
                    <div>
                        <FiCode className='services__icon'/>
                        <h3 className='services__title'> FullStack <br /> Developer</h3>
                    </div>

                    <span className='button button--flex button--small button--link serices__button'>
                        View More
                        <FaArrowRight className='button__icon'/>
                    </span>

                  
                </a>
                
            </div>
            
        </section>
    )
}

export default Services