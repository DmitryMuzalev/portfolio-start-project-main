import styled from "styled-components";
import { theme } from "styles/Theme";

const Icon = styled.img`
  transition: 0.3s;
`;

const Text = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.color.primary};
`;

const SocialItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;

  &:hover {
    ${Icon} {
      transform: scale(1.15);
    }
  }
`;

export const S = { SocialItemWrapper, Icon, Text };
