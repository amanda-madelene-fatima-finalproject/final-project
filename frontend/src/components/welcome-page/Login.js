import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { API_URL } from "../../utils/urls";
// import { user } from "../../reducers/user"
import { user, userAccess } from '../../reducers/user';

const Login = () => {
  //----------- LOCAL STATES ----------//
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signup');

  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  const errorMessage = useSelector((store) => store.user.error);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //--------- USEEFFECT FOR THE ACCESSTOKEN ----------//
  useEffect(() => {
    // This condition can be only true if the user has signed up first as the accessToken is generated when a newUser model is created in the database.
    // Once the user has signed up, the accessToken is sent by the backend in the data response and updated in the redux store by the actions.
    if (accessToken) {
      navigate('/dashboard');
    }
  }, [accessToken, navigate]);

  //--------- USEEFFECT FOR THE ERRORMESSAGE ----------//

  useEffect(() => {
    // This condition can be only true if the the data comming from the database when fetching is not success.
    // If the user tries to sign in without having signed up first or if the username does not match the password, this function executes.
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  const onFormSubmit = (event, name, username, password, mode) => {
    event.preventDefault();
    dispatch(userAccess(name, username, password, mode));
  };

  return (
    <LoginContainer>
      <Wrapper>
        {mode === 'signin' ? (
          <LinkText>
            <PText>First time here? </PText>
            <Div>
              <PButton onClick={() => setMode('signup')}>Sign Up</PButton>
            </Div>
          </LinkText>
        ) : (
          <LinkText>
            <PText>Already have an account? </PText>
            <Div>
              <PButton
                onClick={() => {
                  setMode('signin');
                  dispatch(user.actions.setError(null));
                  setUsername('');
                  setPassword('');
                }}
              >
                Sign In
              </PButton>
            </Div>
          </LinkText>
        )}
        <Form
          onSubmit={(event) =>
            onFormSubmit(event, name, username, password, mode)
          }
        >
          {mode === 'signup' ? (
            <>
              <Label htmlFor="name">Name</Label>
              <Input
                title="name"
                id="name"
                type="text"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          ) : null}

          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="janedoe1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {mode === 'signup' ? (
            <Button type="submit">Sign Up</Button>
          ) : (
            <Button type="submit">Sign In</Button>
          )}
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;

//--------- STYLED COMPONENTS ----------//
const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  padding: 3px;
  color: white;
  font-weight: 600;
  padding-top: 10px;
`;

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  // background-color: #ef737d;
`;
const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  /* border-radius: 50px; */
  padding: 50px;
  background-color: #ef737d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  /* border: solid 1px black; */
  border-radius: 50px;
  /* background-color: whitesmoke; */
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  width: 260px;
  margin: 50px auto;
  /* background: white; */
  border-radius: 10px;

  @media (min-width: 1440px) {
    width: 400px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  margin-top: 30px;
  padding: 5px 10px;
  font-weight: 600;
  background-color: white;
  border: solid 1px transparent;
  border-radius: 5px;
  color: #ef737d;
  font-size: 18px;
  letter-spacing: 2px;
  :hover {
    background-color: #ef737d;
    color: whitesmoke;
    border: solid 1px whitesmoke;
    /* transform: scale(1.2, 1.2); */
  }
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 1px dotted white;
  /* border-top: 1px solid #b4b2b2; */
  padding: 10px;
  p {
    margin: 5px;
  }
`;

const Div = styled.div`
  /* width: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`;

const PButton = styled.p`
  font-weight: 700;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0 10px;
`;

const PText = styled.p`
  color: white;
  font-style: italic;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
  /* font-weight: 700; */
`;
