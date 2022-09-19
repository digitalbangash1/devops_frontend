import React from "react";

/**
 * Missing logo on top of copyright line aswell as links for bottom line
 */
const today = new Date();

const Footer = () => (
  <div className="footer">

    <p>Copyright © {today.getFullYear()} Batata webshop </p>

    <p>Legal Stuff | Privacy Policy | Security </p>
  </div>
);

export default Footer;