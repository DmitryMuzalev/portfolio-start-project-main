import styled from "styled-components";

type FlexContainerPropsType = {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string;
  gap?: string;
};

const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  align-items: ${(props) => props.align || "start"};
  justify-content: ${(props) => props.justify || "start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "none"};
`;

export { FlexContainer };
