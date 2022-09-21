import React from "react";

/**
 * Update the year in the footer
 */
const today = new Date();

/**
 * Missing logo on top of copyright line aswell as links for bottom line
 */
const Footer = () => (
  <div className="footer">

    <p>Copyright © {today.getFullYear()} Batata webshop </p>

    <p> Legal Stuff | Privacy Policy | Security </p>
  </div>
);

export default Footer;