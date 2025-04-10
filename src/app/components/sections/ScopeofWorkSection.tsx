import React from 'react'

function ScopeofWorkSection() {
    const services = ["Event Managment","Fleet Managment","Food/Groceryand other Services Delivery","Automechanic on Call Web Application","Tour Operation","General Order Supplies/Import & Export","Housing, Land, and Property Managment and Administration","NGO Consultants Network","Architecture Firm","Juice Bottling Small Scale Unit","Agricultural Research Center"]
  return (
    <section className='w-screen py-10 flex flex-col gap-6 items-center'>
      <div className='w-full px-20 flex flex-col text-center items-center'>
        <h2 className='text-5xl font-semibold text-[#002060] pb-10'>Our Diversified Scope of Work</h2>
        <p className='w-2/3'>Over the years, we have expanded our expertise to offer a wide range of services, driven by our
        commitment to innovation and client satisfaction.</p>
        <p className='font-semibold text-[#002060]'>Below are some of our key services area:</p>
      </div>
      <div className='w-full bg-[#002060] p-10 flex gap-4 flex-wrap justify-center'>
        {services.map((service, index) => (
          <div key={index} className='border border-[#ED7D31] w-38 content-center text-center p-2 text-white rounded-md'>
            <p className='font-light'>{service}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScopeofWorkSection
