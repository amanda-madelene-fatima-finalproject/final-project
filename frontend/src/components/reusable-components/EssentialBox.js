import React from 'react';
import styled from 'styled-components';

const EssentialBox = (props) => {
  const { header, quote, text } = props;
  return (
    <Wrapper>
      <h3>{header}</h3>
      <h4>{quote}</h4>
      <p>{text}</p>
    </Wrapper>
  );
};

export default EssentialBox;

//--------- STYLED COMPONENTS ----------//
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  border-radius: 50px;
  background-color: whitesmoke;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  width: 240px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;

  h3 {
    color: #ef737d;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
`;
