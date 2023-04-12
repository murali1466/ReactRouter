import "./index.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid hero-section mr">
        <div className="part-1 p-3 mtop">
          <h1 className="head">Headless Development Agency for Fintech</h1>
          <p className="head-2">
            SCube Builds Fast, Secure and Composable website that focuses on
            outstanding customer experience.
          </p>
          <ul>
            <li>
              <p className="main-points">10x Contentful Certified Developers</p>
            </li>
            <li>
              <p className="main-points">Dedicated POC &amp; MVP Team</p>
            </li>
            <li>
              <p className="main-points">Expert In Audit &amp; Discovery</p>
            </li>
          </ul>
          <div>
            <button className="btn custom-button">Contact Sales</button>
          </div>
        </div>
        <div className="part-2 mtop">
          <img
            src="https://res.cloudinary.com/dm9tstije/image/upload/v1678857604/scubemain/contentful-cube_oek7od.png"
            className="clogo"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
