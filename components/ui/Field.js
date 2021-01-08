import React from 'react';
import styled from 'styled-components';

const Field = ({
  id,
  label,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
  error,
}) => {
  return type == 'textarea' ? (
    <FieldContainer>
      <TextArea
        className="FieldInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
      <Labels htmlFor={id} error={error}>
        {error ? error : label}
      </Labels>
    </FieldContainer>
  ) : (
    <FieldContainer>
      <Input
        className="FieldInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
      <Labels htmlFor={id} error={error}>
        {error ? error : label}
      </Labels>
    </FieldContainer>
  );
};

export default Field;

const TextArea = styled.textarea`
  border: 1px solid purple;
  background-color: transparent;
  color: purple;
  padding-left: 0.3em;
  letter-spacing: 0.3em;
  transition: 0.5s;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  min-height: 70px;
  &:focus {
    outline: 0;
  }
`;

const FieldContainer = styled.div`
  position: relative;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 0px 0px 10px 0px;
  border: none;
  border-left: 1px solid purple;
  border-bottom: 1px solid purple;
  color: purple;
  font-size: 16px;
  padding-left: 0.3em;
  letter-spacing: 0.3em;
  transition: 0.5s;
  &:focus {
    outline: 0;
  }
`;
const Labels = styled.label`
  position: absolute;
  display: block;
  padding: 0.5em;
  transition: 0.5s;
  cursor: inherit;
  top: -80%;
  color: ${props =>
    props.error
      ? 'var(--color-red)'
      : 'var(--color-purple)'};
`;
