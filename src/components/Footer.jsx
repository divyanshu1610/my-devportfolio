import React from "react";
import { Fade } from "react-reveal";

import emoji from "react-easy-emoji";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row center">
          <div className="col-sm-5"></div>
          <div className="col-sm-5 copyright">
            {/* <p>Copyright &copy; 2020 Divyanshu Maurya</p> */}
            <Fade bottom duration={1000} distance="5px">
              <div className="footer-div">
                <p className="footer-text">
                  {emoji("Made with ❤️ by Divyanshu Maurya")}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
