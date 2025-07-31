import React from 'react';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="w-full bg-global-1 shadow-[0px_0px_1px_#00000007] px-[14px] py-[14px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full mx-[4px]">
          {/* Left Section - Logo and User Info */}
          <div className="flex flex-row gap-[10px] justify-center items-center w-auto">
            <img 
              src="/images/img_.svg" 
              alt="logo" 
              className="w-[32px] h-[32px] rounded-[16px]"
            />
            <div className="flex flex-row gap-[10px] justify-center items-center w-auto">
              <img 
                src="/images/img_rectangle_444.png" 
                alt="user avatar" 
                className="w-[32px] h-[32px] rounded-[16px]"
              />
              <span className="font-montserrat font-semibold text-[12px] leading-[15px] text-center text-header-1">
                Алексей
              </span>
            </div>
          </div>

          {/* Center Section - Logo/Brand */}
          <img 
            src="/images/img_vector.svg" 
            alt="brand logo" 
            className="w-[176px] h-[44px]"
          />

          {/* Right Section - Cabinet Button and Profile */}
          <div className="flex flex-row gap-[12px] justify-center items-center w-auto">
            <Button
              variant="secondary"
              className="font-montserrat font-semibold text-[12px] leading-[15px] text-center text-global-2 bg-global-1 border border-global-2 rounded-[16px] px-[26px] py-[8px] shadow-[0px_0px_1px_#0000000a]"
            >
              Кабинет
            </Button>
            <img 
              src="/images/img_white_a700.svg" 
              alt="profile" 
              className="w-[32px] h-[32px] rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;