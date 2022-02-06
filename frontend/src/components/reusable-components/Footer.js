import React from "react";
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from "@material-ui/core/Container"; // similar to Div, add some padding and margin
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-around",
    alignContent: "center",
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "#EF737D",
    fontFamily: "Poppins",
    "&:hover": { color: "#e5e5e5", backgroundColor: "white" },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Link className={classes.link} to="/aboutproject">
        About the Project
      </Link>
      <Link className={classes.link} to="/aboutus">
        About Us{" "}
      </Link>

      <Link className={classes.link} to="/contactus">
        Contact Us{" "}
      </Link>
    </Container>
  );
};

export default Footer;
