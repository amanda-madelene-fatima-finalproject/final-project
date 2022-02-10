import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Quotes = () => {
  //--------- LOCAL STATE ----------//
  const [quote, setQuote] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  //--------- USEEFFECT----------//

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setQuote(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {randomQuote ? (
        <>
          <Wrapper>
            <QuoteText>&quot;{randomQuote.text}&quot;</QuoteText>{' '}
          </Wrapper>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </Container>
  );
};

export default Quotes;

//--------- STYLED COMPONENTS ----------//
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 90vh; */
`;

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

  @media (min-width: 768px) {
    min-height: 350px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const QuoteText = styled.p`
  font-size: 16px;
  padding: 20px;
  color: black;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 21px;
  }
`;
