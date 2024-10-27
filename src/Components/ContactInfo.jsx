import React from 'react';

const ContactInfo = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h2>Contact Information</h2>
      <input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange('email')}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={values.phone}
        onChange={handleChange('phone')}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default ContactInfo;
