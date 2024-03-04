import React from "react";
import { Typography, Link, Container } from "@mui/material";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {"Eyepax Copyright © "}
          <Link
            color="inherit"
            href="https://eyepax.com/"
            className="footer-link"
          >
            Our Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
