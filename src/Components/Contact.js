import React from 'react';  
import './Contact.css';

const Contact = () => {
  const inputClasses = ['pa3 br2 b--transparent grow'];
  return(
    <div className='flex flex-wrap items-center justify-around contact white'>
      <div id='Contact' className='tc mv5 w-80-l'>
        <h1 className='ttu'>Contact</h1>
        <h3 className='i fw1'>Loren ipsum dorlor sit amet consecteturr</h3>

        <div className='flex flex-column flex-row-l justify-around ma3'>
          <div className='flex flex-column justify-between w-100 mh3-l'>
            <input className={`mb3 ${inputClasses}`} type="text" placeholder='Your Name *'/>
            <input className={`mb3 ${inputClasses}`} type="email" placeholder='Your Email *'/>
            <input className={`mb3 ${inputClasses}`} type="tel" placeholder='Your Phone *'/>
          </div>
          <div className='w-100 mb3-l'>
            <textarea className={`w-100 h-100 resize-none ${inputClasses}`} name="message" id="message" placeholder='Your Message *'></textarea>
          </div>
          
        </div>
        <div>
          <input className={`pointer bg-orange white ${inputClasses}`} type="button" value="Send Message"/>
        </div>

      </div>
    </div>
  )
}

export default Contact;