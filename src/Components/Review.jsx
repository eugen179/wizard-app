import React from 'react';

const Review = ({ prevStep, values }) => {
  return (
    <div>
      <h2>Review Your Information</h2>
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
      <p>Phone: {values.phone}</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => alert('Form Submitted!')}>Submit</button>
    </div>
  );
};

export default Review;
