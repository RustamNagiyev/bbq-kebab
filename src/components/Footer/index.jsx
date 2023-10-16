import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <div className='containerfooter'>
            <div className='flexa'>
      <img className='footerimg' src='./pictures/footerimg.svg' alt='footerimg'></img>
      </div>
      <div className='flexa'>
        <p className='p1'>
        Get in touch
        </p>
        <p className='p2'>
        info@bbq&kebab.com
        </p>
        <p className='p2'>
        +1 (816) 482 1513
            </p>
      </div>
      <div className='flexa'>
        <p className='p1'>
        Follow us
        </p>
        <p className='p2'>
        Instagram
        </p>
        <p className='p2'>
        Facebook
        </p>
        </div>
        <div className='flexa'>
            <p className='p1'>
            Address
            </p>
            <p className='p2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            </p>
        </div>
      </div>
      <div className='containerend'>
        <p className='pend1'><span className='c'>c</span>2022<span className='dta'>Data Privacy</span></p>
        <p className='pend2'>Design by: <span className='spanend'>JEDAI</span></p>
      </div>
      
      </section>
    </div>
  )
}

export default Footer
