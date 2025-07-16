import React from 'react';
import ScrollFloat from '../pages/ScrollFloat';
import '../../Components/pages/About.css';

const Quote = () => {
  return (
    <div className="w-full h-auto flex items-left justify-center bg-white text-black py-16">
      <div className="text-center max-w-4xl px-8">
        <div style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          <ScrollFloat 
            containerClassName="mb-8"
            textClassName="text-6xl md:text-8xl font-bold leading-tight tracking-wide"
          >
            Still learning, still building...
            occasionally debugging for hours
            because I missed a semicolon
          </ScrollFloat>
          
          <ScrollFloat 
            containerClassName="mt-8"
            textClassName="text-2xl md:text-3xl opacity-80"
          >
          
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
};

export default Quote;
