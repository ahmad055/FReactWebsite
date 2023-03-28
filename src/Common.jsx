import React from 'react';
import { NavLink } from 'react-router-dom';



export const Common = (props) => {
  return (
    <>
    <section id='header' className='d-flex align-items-center header'>
      <div className='container-fluid  '>
         <div className='row'>
              <div className='col-10 mx-auto  '>
                    <div className='row'>
                         <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                              <h1>
                                 {props.name} <strong className='brand-name'>Ahmad Hassan</strong>
                              </h1>
                              <h2 className='my-3'>
                                 We are the team of talented developer making websites.
                              </h2>
                              <NavLink className='btn-get-started' to={props.visit}>{props.btnname}</NavLink>

                          </div>
 
              
                         <div className='col-lg-6 order-1 order-lg-2 header-img'>
                             <img className='header-img' src={props.imgsrc} alt='home img'/>
                        </div>
                 </div>
            </div>

          </div>
      
      </div>
    
    </section>
    </>
  )
}