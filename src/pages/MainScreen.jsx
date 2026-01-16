import React from 'react';
import MainHeader from '../header/MainHeader';
import bodyImg from '../assets/body.svg';

const MainScreen = () => {
  return (
    <div className="relative w-screen bg-black">
      <div className="absolute top-0 left-0 w-full z-10">
        <MainHeader />
      </div>
      {/* 배경 이미지 */}
      <img
        src={bodyImg}
        className="w-full h-auto block"
      />
    </div>
  );
};

export default MainScreen;
