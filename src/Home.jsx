import React from 'react';
import { Common } from './Common';
import pic from '../src/images/hn.jpg';


const Home = () => {
  return (
    <Common 
    name='Grow up your buisness with'
    imgsrc={pic}
    btnname='Get Started'
    visit='/services'
    />
  )
}

export default Home