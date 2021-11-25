import React from "react";
const today = new Date();
const Footer = () => {
  return (
    <footer>
      <p> Copyright &copy; {today.getFullYear()} CodeyShakthi.com</p>
    </footer>
  );
};

export default Footer;
