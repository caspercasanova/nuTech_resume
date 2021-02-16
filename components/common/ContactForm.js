import React, { useState } from 'react';
import Field from '../ui/Field';
import ComingSoon from '../ui/ComingSoon';
import styled from 'styled-components';
import TypedMessage from '../ui/TypedMessage';
const ContactFormWrapper = styled.section`
  position: relative;
`;

export default function ContactForm() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearForm = () => {
    setFormData({
      email: '',
      name: '',
      company: '',
      message: '',
    });
  };

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    message: '',
  });

  const handleValidation = () => {
    if (!email.length || !name.length || !message.length) {
      setError(true);
    } else {
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (error.length) {
      return;
    }
    // check for errors
    let data = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response);

    console.log(data);

    if (data.status == 200) {
      setSuccess(true);
      clearForm();
    }

    console.log('submit fired');
  };

  return (
    <ContactFormWrapper>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="Email"
          value={formData.email}
          type="email"
          required
          onChange={e =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        <Field
          placeholder="Name"
          value={formData.name}
          type="text"
          required
          onChange={e =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
        <Field
          placeholder="Company [ Optional ]"
          value={formData.company}
          type="text"
          onChange={e =>
            setFormData({
              ...formData,
              company: e.target.value,
            })
          }
        />
        <Field
          placeholder="Message"
          value={formData.message}
          type="textarea"
          required
          onChange={e =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
      {success && <SuccessThing />}

      {/* <ComingSoon /> */}
    </ContactFormWrapper>
  );
}

const FormButton = styled.button``;

const SuccessThing = () => {
  return (
    <div>
      <TypedMessage message={'success!'} />
    </div>
  );
};
