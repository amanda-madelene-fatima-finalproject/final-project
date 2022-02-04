import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/urls.js";
import styled from "styled-components";

const Container = styled.section`
  border: solid red 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background-color: #ef737d; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  border: solid 1px black;
  border-radius: 50px;
  background-color: whitesmoke;
`;

const QuoteText = styled.p`
  font-size: 16px;
  padding: 20px;
  color: black;
  font-weight: bold;
  border: 2px solid black;
`;

const Quotes = () => {
  // return <p>HELLO</p>;
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(API_URL("quotes"))
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);

  //   return quote.forEach((item) => {
  //     for (let key in item) {
  //       console.log(`${key}: ${item[key]}`);
  //     }
  //   });
};

// <Container>
//   <QuoteText>
//     <p>{quote.quote}</p>
//   </QuoteText>
// </Container>

// {quote.map((data) => {
//     return <p>{data.quote}</p>;
//   })}

export default Quotes;
