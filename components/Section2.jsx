import React from 'react';
import TimerColumn from './TimerColumn';

const Section2 = () => {
  return (
    <div className="bg-dark1 py-40 md:pt-100">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white w-full text-4xl md:text-8xl font-black text-center">DON&apos;T MISS OUT!</h3>
          <div className="flex flex-wrap justify-center">
            <TimerColumn text={'Days'} number={'00'}/>
            <TimerColumn text={'Hours'} number={'00'}/>
            <TimerColumn text={'Minute'} number={'00'}/>
            <TimerColumn text={'Second'} number={'00'} booleanValue={false}/>
          </div>
        </div>
      </div>

  );
};

export default Section2;
