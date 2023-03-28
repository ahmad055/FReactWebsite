import React, { useState } from 'react'

const Contact = () => {
  const[data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    msg:'',
  });

  const inputValue= (event)=>{
    const {name, value}= event.target;
    setData((preVal)=>{
      return{
        ...preVal,
      [name]:value,

      }

    })

  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.name}. My Email is ${data.email}. My Phone Number is ${data.phone}`)
    

  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>
         Contact US
        </h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
                <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                 <input type="text" className="form-control" Name='name' value={data.name} onChange={inputValue} id="exampleFormControlInput1" placeholder="Abrar Rasul"/>
                </div>
                <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label">Email address</label>
                 <input type="email" className="form-control" Name='email' value={data.email} onChange={inputValue} id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                 <label for="exampleFormControlInput1" className="form-label">Phone</label>
                 <input type="number" className="form-control" Name='phone' value={data.phone} onChange={inputValue} id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" Name='msg' value={data.msg} onChange={inputValue} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <button class="btn s-btn" type="submit">Submit form</button>
                </div>
            </form>

          </div>

        </div>

      </div>

    </>
  )
}

export default Contact