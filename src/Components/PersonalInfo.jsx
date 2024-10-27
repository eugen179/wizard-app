import React from 'react';

const PersonalInfo = ({ nextStep, handleChange, values }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={handleChange('name')}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PersonalInfo;
