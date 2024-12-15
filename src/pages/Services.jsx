
import React from 'react'
import { services } from '../assets/data/services'
import ServiceCard from '../components/Services/ServiceCard'

const Services = () => {
  return (
    <section>
      <div className='conatiner'>
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical Services</h2>
            <p className='text_para text-center'>
              World-class Care for everyone. Our health System offers unmatched,
              expert health care.
            </p>

          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
      </div>
    </section>
  )
}

export default Services