import React from "react";
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container"; // similar to Div, add some padding and margin
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "white",
    marginLeft: 3,
    marginRight: 3,
    color: "#EF737D",
    fontFamily: "Poppins",
    "&:hover": { color: "#e5e5e5", backgroundColor: "white" },
  },
  wrapper: {
    padding: 15,
    marginBottom: 10,
    justifyContent: "space-around",
    alignContent: "center",
    display: "flex",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Button className={classes.btn}>One</Button>
      <Button className={classes.btn}>Two</Button>
      <Button className={classes.btn}>Three</Button>
      <Button className={classes.btn}>Four</Button>
      <Button className={classes.btn}>Five</Button>{" "}
    </Container>
  );
};

export default Footer;
