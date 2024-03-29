import styled, { css } from "styled-components";

// const test = `${5 > 7 && "background-color:purple"}`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      background-color: ;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      background-color: ;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      background-color: ;
    `}

  font-size: 30px;
  font-weight: 600;
`;

export default Heading;
