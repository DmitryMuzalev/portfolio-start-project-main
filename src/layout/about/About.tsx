import { S } from "./AboutStyles";

import { SectionTitle } from "components/section/SectionTitle";

function About() {
  return (
    <S.AboutWrapper>
      <SectionTitle>About me</SectionTitle>
      <S.Content>
        <S.Text>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </S.Text>
      </S.Content>
    </S.AboutWrapper>
  );
}

export { About };
