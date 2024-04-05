import React from 'react';
import CardStyle1 from './CardStyle1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons';

const Section3 = () => {
    return (
      <div className="bg-white bg-cover bg-no-repeat pt-32 relative before:absolute before:w-full before:h-full before:top-0 before:left-0 z-10">
        <div className="container relative z-30 mx-auto">
          <div className="text-orange-600 text-3xl font-bold text-center mb-4">Must Visit in Dubai</div>
          <p className="text-black text-lg text-center mb-4">These landmarks should never be skipped</p>
          <CardStyle1/>
          <CardStyle1/>
          <CardStyle1/>
          <CardStyle1/>
          <CardStyle1/>
          <CardStyle1/>
        </div>
      </div>
    );
  };
  
  export default Section3;
