import React from 'react';
import FooterInformation from "./FooterInformation/FooterInformation";
import FooterPayment from "./FooterPayment/FooterPayment";
import FooterContacts from "./FooterContacts/FooterContacts";

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <FooterInformation/>
        <FooterPayment/>
        <FooterContacts/>
      </div>
    </footer>
  );
}

export default Footer;