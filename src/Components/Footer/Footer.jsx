function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container text-white text-center py-5">
          <div className="row gy-4 justify-content-between">
            <div className="col-md-4">
              <div className="location">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="web">
                <h3>AROUND THE WEB</h3>
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-3">
            <p className=" mb-0 text-white text-center">Copyright © Your Website 2021</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
