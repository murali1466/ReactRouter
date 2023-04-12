const Contact = () => {
  return (
    <>
      <footer className="container-fluid  pt-5 bg-white">
        <div className="text-left">
          <img
            src="https://res.cloudinary.com/dm9tstije/image/upload/v1678857608/scubemain/SCube-Logo__1__i2ozc1.svg"
            className="foot-logo"
          />
        </div>
        <div className="foot-page">
          <div className="foot-sections">
            <h1 className="foot-head">Services</h1>
            <p className="foot-points">JAMstack Technology</p>
            <p className="foot-points">Wordpress Website</p>
            <p className="foot-points">Website Management</p>
          </div>
          <div className="foot-sections">
            <h1 className="foot-head">Company</h1>
            <p className="foot-points">About us</p>
            <p className="foot-points">Contact us</p>
            <p className="foot-points">Jobs</p>
          </div>
          <div className="foot-sections">
            <h1 className="foot-head">Wordpress Themes</h1>
            <p className="foot-points">Stocky Photography Theme</p>
            <p className="foot-points">Political WordPress Theme</p>
            <p className="foot-points">Learning Management System</p>
          </div>
          <div className="foot-sections">
            <h1 className="foot-head">Trustpilot Review</h1>
            <img
              src="https://res.cloudinary.com/dm9tstije/image/upload/v1678857610/scubemain/trustpilot-vector-logo_yfo0ov.png"
              className="footerstar-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="footer-2">
          <div className="scube-reg">
            <h1 className="foot-head">© 2023 SCube ®</h1>
            <p className="about-company">
              SCube.Co &amp; SCube Theme Is Trading Name For SCube Digital
              Limited. SCube ® Is A Registered Trademark In The United Kingdom.
              Copyright © 2006-2021 SCube Digital Limited. All Rights Reserved.
            </p>
          </div>
          <div className="terms pt-5">
            <ul className="list-type foot-li-flex">
              <li className="b">
                <a>Terms &amp; Policies</a>
              </li>
              <li className="b">
                <a>Privacy Policy</a>
              </li>
              <li className="b">
                <a>Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="follow-us pt-5">
            <ul className="list-type foot-li-flex">
              <li>
                <a>
                  <i className="fa-brands fa-facebook b" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-twitter b" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-instagram b" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-youtube b" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-linkedin-in b" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Contact;
