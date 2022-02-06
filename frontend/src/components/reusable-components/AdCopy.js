import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 60px;
  font-weight: 800;
`;

const AdCopy = (props) => {
  const { text } = props;

  return (
    <div>
      <Headline>{text}</Headline>
    </div>
  );
};

export default AdCopy;
