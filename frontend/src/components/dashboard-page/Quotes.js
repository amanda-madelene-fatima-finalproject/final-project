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

// useState
const Quotes = () => {
  const [quote, setQuote] = useState([]);

  //useEffect reacts to changes happening in the useState
  // The empty array is the second argument of the useEffect hook and that's to prevents this fetch to happen every time the state changes, otherwise, it will make an infinite loop.
  // This way the useEffect only listens to when the component is mounted, not the changes or the unmount, only the mounted
  useEffect(() => {
    fetch(API_URL("quotes"))
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        console.log(quote);
      });
  }, []);

  return (
    <>
      <div>
        {quote.map((item) => (
          <p key={item.quote}>{item.quote}</p>
        ))}
      </div>
    </>
  );
};

//   return quote.forEach((item) => {
//     for (let key in item) {
//       console.log(`${key}: ${item[key]}`);
//     }
//   });

// <Container>
//   <QuoteText>
//     <p>{quote.quote}</p>
//   </QuoteText>
// </Container>

// {quote.map((data) => {
//     return <p>{data.quote}</p>;
//   })}

export default Quotes;
