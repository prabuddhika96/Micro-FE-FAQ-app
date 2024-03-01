import React from "react";
import { Typography, Link, Container } from "@mui/material";


const Footer = () => 
{
    return (
    <footer className="bg-cyan-800 text-white py-4 h-12 fixed bottom-0 w-full">
      <Container  maxWidth="sm">
        <Typography variant="body2" align="center" >
          {"Eyepax Copyright © "}
          <Link color="inherit" href="https://eyepax.com/">
            Our Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
    );
}

export default Footer;