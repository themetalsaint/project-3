//import stock
import React from "react";
import Navbar from "./navbar";
import Calm from "./calm";


class Main extends React.Component {
  render() {
    return (
      <>
      <Navbar />
    <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Interview helper</h3>
                <p className="subtitle-a">
                  Welcome
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Calm />
      </>
    );
  }
}

export default Main;