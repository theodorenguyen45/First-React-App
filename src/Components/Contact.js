import React from 'react'
import './Contact.css'

export default () => {
  const inputClasses = ['pa3 br2 b--transparent grow']

  const [messages, setMessages] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const { name, email, phoneNumber } = messages

  const handleChange = e => {
    const { name, value } = e.target
    setMessages({ ...messages, [name]: value })
  }

  const handleSubmit = e => {
    alert('Thank you for visiting')
  }

  return (
    <div className='flex flex-wrap items-center justify-around contact white'>
      <div id='Contact' className='tc mv5 w-80-l'>
        <h1 className='ttu'>Contact</h1>
        <h3 className='i fw1'>
          Loren ipsum dorlor sit amet consecteturr
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-column flex-row-l justify-around ma3'>
            <div className='flex flex-column justify-between w-100 mh3-l'>
              <input
                className={`mb3 ${inputClasses}`}
                type='text'
                name={name}
                onChange={handleChange}
                placeholder='Your Name *'
              />
              <input
                className={`mb3 ${inputClasses}`}
                type='email'
                name={email}
                onChange={handleChange}
                placeholder='Your Email *'
              />
              <input
                className={`mb3 ${inputClasses}`}
                type='tel'
                name={phoneNumber}
                onChange={handleChange}
                placeholder='Your Phone *'
              />
            </div>
            <div className='w-100 mb3-l'>
              <textarea
                className={`w-100 h-100 resize-none ${inputClasses}`}
                name='message'
                id='message'
                placeholder='Your Message *'
              ></textarea>
            </div>
          </div>
          <div>
            <button
              className={`pointer bg-orange white ${inputClasses}`}
              type='submit'
              value='Send Message'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
