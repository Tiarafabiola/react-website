import React from 'react'
import ServiceItem from './ServiceItem'


const Services = () => {
  return (
    <div className="section bg-light text-dark py-5">
        <div className="container">
                <h1>My Passion...</h1>  
                <div className="row">
                    <ServiceItem 
                        judul="Web Develpoment"
                        deskripsi="Membangun situs web menggunakan HTML,CSS,Javascript,ReactJs."
                    />
                    
                </div>
        </div>
    </div>
  )
}

export default Services