import styled from "styled-components";
import { theme } from "styles/Theme";

import { Button } from "components/button/Button";

const Form = styled.form`
  width: 100%;
  max-width: 535px;
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  flex-direction: column;

  textarea {
    min-height: 165px;
    resize: none;
  }

  ${Button} {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Label = styled.label`
  display: inline-block;еуд
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
`;

const FieldWrapper = styled.div`
  position: relative;
`;

const Field = styled.input`
  width: 100%;
  padding: 1rem 1.125rem;
  font-family: ${theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.color.primary};
  background-color: transparent;
  border: 1px solid ${theme.color.primary};
  border-radius: 0.375rem;
  transition: 0.3s;

  &::placeholder {
    font-size: 0.875rem;
    color: ${theme.color.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: transparent;
    background: linear-gradient(
        to right,
        ${theme.color.bg.primary},
        ${theme.color.bg.primary}
      ),
      ${theme.gradient.primary_90deg};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
`;

export const S = { Form, Label, FieldWrapper, Field };
