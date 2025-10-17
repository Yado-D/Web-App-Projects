import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

export function FOOTER() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <ul>
            <li><FacebookIcon/></li>
            <li><InstagramIcon/></li>
            <li><YouTubeIcon/></li>
          </ul>
        </div>
        <div className="footer_datas">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relation</li>
              <li>Audio Description</li>
              <li>Invester Relation</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cokies Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of USE</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Midia Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <h4 style={{color:"gray", paddingBottom: "20px"}}>Netflix Clone By Yared Dereje © 2025</h4>
      </div>
    </div>
  );
}
