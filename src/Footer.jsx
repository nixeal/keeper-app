import React from "react";
const Footer = () => {
  const year = new Date().toUTCString().slice(11, 16);

  return (
    <footer>
      <p>Copyright@ {year}</p>
    </footer>
  );
};

export default Footer;
