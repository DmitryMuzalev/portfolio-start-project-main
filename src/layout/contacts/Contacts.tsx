import { S } from "./ContactsStyles";

import { Button } from "components/button/Button";
import { SectionTitle } from "components/section/SectionTitle";
import { SectionWrapper } from "components/section/SectionWrapper";

function Contacts() {
  return (
    <SectionWrapper id="contacts">
      <SectionTitle>Contacts</SectionTitle>
      <S.Form action="#" autoComplete="off">
        <S.FieldWrapper>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Field id="name" type="text" placeholder="Your name" />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Field id="email" type="email" placeholder="example@domain.com" />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.Label htmlFor="message">Message</S.Label>
          <S.Field as="textarea" id="message" placeholder="Hi, I will..." />
        </S.FieldWrapper>
        <Button type="submit">Submit</Button>
      </S.Form>
    </SectionWrapper>
  );
}

export { Contacts };
