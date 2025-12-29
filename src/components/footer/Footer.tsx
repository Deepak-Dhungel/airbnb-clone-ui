import React from "react";
import "../../styles/components/footerStyles.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  const footerLinks = [
    {
      title: "Support",
      items: [
        "Help Centre",
        "AirCover",
        "Cancellation Options",
        "Report neighbourhood concern",
      ],
    },
    {
      title: "Hosting",
      items: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
      ],
    },
    {
      title: "Airbnb",
      items: ["Newsroom", "New features", "Careers", "Investors"],
    },
  ];

  return (
    <div className="footer_container">
      <div className="footer_upper">
        {footerLinks.map((link) => (
          <div className="footer_links">
            <li style={{ fontWeight: "700" }}>{link.title}</li>
            <li className="links">{link.items[0]}</li>
            <li className="links">{link.items[1]}</li>
            <li className="links">{link.items[2]}</li>
            <li className="links">{link.items[3]}</li>
          </div>
        ))}
      </div>
      <div className="footer_bottom">
        <div className="copyright">© 2024 Airbnb, Inc.</div>
        <div className="social_links">
          <AiFillFacebook size={20} />
          <AiFillTwitterSquare size={20} />
          <AiFillInstagram size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
