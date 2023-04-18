import React from 'react'
// import HeaderSvg from "../assets/images/BCID_H_rgb_rev.svg";

function Header() {
  return (
    <header>
      <div className="banner">
        <a href="https://gov.bc.ca">
          <img src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg" alt="Go to the Government of British Columbia website" />
        </a>
        <h1>Hello British Columbia</h1>
      </div>
      <div className="other">
        {/* This place is for anything that needs to be right aligned beside the logo. */}
        &nbsp;
      </div>
    </header>
  );
}

export default Header;
