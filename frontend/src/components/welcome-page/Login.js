import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { API_URL } from "../../utils/urls";
// import { user } from "../../reducers/user"
import { user, userAccess } from "../../reducers/user";

//--------- STYLED COMPONENTS ----------//

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  padding: 3px;
`;

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background-color: #ef737d;
`;
const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
`;

const RadioInput = styled.input`
  opacity: 0.6;
`;

const RadioButton = styled.div`
  margin: 0 10px;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  border-radius: 50px;
  padding: 50px;
  background-color: #ef737d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  margin-top: 40px;
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
  border-top: 1px solid #b4b2b2;
  padding: 10px;
  p {
    margin: 5px;
  }
`;

const Login = () => {
  //----------- LOCAL STATES ----------//
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signup");

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
      navigate("/dashboard");
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
        {mode === "signin" ? (
          <LinkText>
            <p>First time here? </p>
            <p
              onClick={() => setMode("signup")}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Create an account
            </p>
          </LinkText>
        ) : (
          <LinkText>
            <p>Already have an account? </p>
            <p
              onClick={() => {
                setMode("signin");
                dispatch(user.actions.setError(null));
                setUsername("");
                setPassword("");
              }}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Log in
            </p>
          </LinkText>
        )}
        <RadioContainer>
          <RadioButton>
            <Label htmlFor="signup">Signup</Label>
            <RadioInput
              id="signup"
              type="radio"
              checked={mode === "signup"}
              onChange={() => setMode("signup")}
            />
          </RadioButton>

          <RadioButton>
            <Label htmlFor="sigin">Signin</Label>
            <RadioInput
              title="signin"
              id="signin"
              type="radio"
              checked={mode === "signin"}
              onChange={() => setMode("signin")}
            />
          </RadioButton>
        </RadioContainer>

        <Form
          onSubmit={(event) =>
            onFormSubmit(event, name, username, password, mode)
          }
        >
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
