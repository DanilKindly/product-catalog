import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  placeholder = 'Select option', 
  options = [],
  value = '', 
  onChange,
  disabled = false,
  fullWidth = true,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const baseClasses = 'font-montserrat font-medium text-global-2 border border-[#b6b9bd] rounded-[12px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent relative';
  
  const dropdownClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-global-1 cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const selectedOption = options.find(opt => opt.value === selectedValue);
  
  return (
    <div className={`${dropdownClasses} mr-[10px]`} {...props}>
      <div
        className="flex items-center justify-between px-[20px] py-[14px] text-[18px] leading-[22px]"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? 'text-global-2' : 'text-gray-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <img 
          src="/images/img_arrowdown.svg" 
          alt="dropdown arrow" 
          className={`w-[24px] h-[24px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      
      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-global-1 border border-[#b6b9bd] rounded-[12px] shadow-lg z-50 max-h-[200px] overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-[20px] py-[12px] hover:bg-gray-50 cursor-pointer text-[16px] leading-[20px] text-global-2 first:rounded-t-[12px] last:rounded-b-[12px]"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Dropdown;