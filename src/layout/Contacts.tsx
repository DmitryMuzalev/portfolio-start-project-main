import { Button } from "components/UI/Button";
import { FlexContainer } from "components/UI/FlexContainer";
import { SectionTitle } from "components/UI/SectionTitle";
import { SectionWrapper } from "components/UI/SectionWrapper";
import styled from "styled-components";

const Form = styled.form`
  max-width: 535px;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  flex-direction: column;
`;

function Contacts() {
  return (
    <SectionWrapper>
      <SectionTitle>Contacts</SectionTitle>
      <Form>
        <Field name="name" label="Name" placeholder="Your name" />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="example@domain.cpm"
        />
        <Message name="message" label="Message" placeholder="Hi, I will..." />
        <Button type="submit">Submit</Button>
      </Form>
    </SectionWrapper>
  );
}

const Label = styled.label``;
const Input = styled.input`
  width: 100%;
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 165px;
  resize: vertical;
`;

type FieldPropsType = {
  name: string;
  type?: string;
  label: string;
  placeholder: string;
};

function Field({ name, type, label, placeholder }: FieldPropsType) {
  return (
    <FlexContainer direction="column" gap="0.25rem">
      <Label form={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
      />
    </FlexContainer>
  );
}

function Message({ name, label, placeholder }: Omit<FieldPropsType, "type">) {
  return (
    <FlexContainer direction="column" gap="0.25rem">
      <Label form={name}>{label}</Label>
      <Textarea id={name} name={name} placeholder={placeholder} />
    </FlexContainer>
  );
}

export { Contacts };
