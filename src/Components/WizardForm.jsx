import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import Review from './Review';

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <ContactInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Review
          prevStep={prevStep}
          values={formData}
        />
      );
    default:
      return null;
  }
};

export default WizardForm;
