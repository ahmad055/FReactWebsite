import React from 'react';
import { Common } from './Common';
import web from '../src/images/s-page.png';

const About = () => {
  return (
    <>
    <Common 
    name='Welcome to about page'
    imgsrc={web}
    btnname='Contact Now'
    visit='/contact'
    />

    </>
  )
}

export default About