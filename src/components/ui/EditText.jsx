import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = true,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-montserrat font-medium text-global-2 border border-[#b6b9bd] rounded-[12px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  
  const inputClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-global-1'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      className={`${inputClasses} px-[20px] py-[14px] text-[16px] leading-[20px] placeholder:text-gray-400`}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;