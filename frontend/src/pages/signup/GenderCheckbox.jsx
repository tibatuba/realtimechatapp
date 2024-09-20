// src/pages/signup/GenderCheckbox.jsx
import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className='label-text'>Male</span>
          <input 
            type='radio' 
            name='gender' // Use name attribute to group radio buttons
            value='male'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
            className='radio border-slate-900'
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span className='label-text'>Female</span>
          <input 
            type='radio'
            name='gender' // Use name attribute to group radio buttons
            value='female'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
            className='radio border-slate-900'
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
