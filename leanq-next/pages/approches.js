import { useEffect } from "react";
import ControlButtons from "../components/ControlButtons";
import Footer from "../components/Footer";
import HorizontalScrollElementLayout from "../components/HorizontalScrollElementLayout";

const Approches = () => {
  useEffect(() => {
    document.body.setAttribute("titles", "Approaches");
  }, []);
  return (
    <>
      <ControlButtons />
      <HorizontalScrollElementLayout>
        <main id="horizontal-fullpage">
          <section
            data-circle="hide"
            data-arrowleft="hide"
            data-theme="whiteBlack"
            class="section approaches-hero half-dark-bg half-dark-bg-lr"
          >
            <div className="section-inner">
              <div class="container">
                <div class="row align-items-center flex-100">
                  <div class="col-md-7">
                    <div class="section-title">
                      <h4 class="text-brand">Approach</h4>
                      <h2>
                        We take a technical approach in making you proactive to
                        tackle rapid changes in the business
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="fixed-content">
                      <h2>What we <br/> do</h2>
                      <a href="" class="brand-link text-white">
                        Our Approches
                        <img
                          src="./img/icons/arrow-right.svg"
                          class="ms-3"
                          alt="arrow right"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            data-circle="show-white"
            data-theme="black"
            class="section bg-dark"
          >
            <div className="section-inner">
              <div class="container">
                <div class="row align-items-center flex-100">
                  <div class="col-md-5">
                    <div class="section-title">
                      <h2>What we <br />do</h2>

                      <a href="" class="brand-link text-white">
                        Our Approches
                        <img
                          src="./img/icons/arrow-right.svg"
                          class="ms-3"
                          alt="arrow right"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="fixed-content">
                      <h2>Business Consultation</h2>

                      <p>
                        Our first step is to listen to the customer’s business and
                        their current issues. We work together with our clients
                        through online interviews to discover what works and what
                        needs to be improved.
                      </p>

                      <ul>
                        <li>Business Overview</li>
                        <li>Number of employees</li>
                        <li>Status of technology in place</li>
                        <li>Issues/Things to Improve</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            data-circle="show-black"
            data-theme="white"
            class="section bg-white"
          >
            <div className="section-inner">
              <div class="container">
                <div class="row align-items-center flex-100">
                  <div class="col-md-7 bg-white">
                    <div class="section-title">
                      <h2>Working demo or Prototyping</h2>
                      <p>
                        The next step is to quickly build a business system by
                        using Prototyping/NoCode tools. By testing the prototype
                        first-hand our clients can check the software usability
                        and confirm whether or not the product can be used for
                        their business.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5 bg-white">
                    <div class="fixed-content">
                      <h2>Full scale development</h2>

                      <p>
                        Once our clients confirm the prototype to use for their
                        business, we will proceed to contract agreement and start
                        full scale development. Before signing the contract, we
                        will give you an estimate of how long it will take to
                        finish initial development for you to start using it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section data-theme="black" class="section bg-dark">
            <div className="section-inner">
              <div class="container">
                <div class="d-flex align-items-center flex-100">
                  <div class="col-md-7">
                    <div class="section-title">
                      <h2>Full scale development</h2>
                      <p>
                        Once our clients confirm the prototype to use for their
                        business, we will proceed to contract agreement and start
                        full scale development. Before signing the contract, we
                        will give you an estimate of how long it will take to
                        finish initial development for you to start using it.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="fixed-content">
                      <h2>Launch the software</h2>
                      <p>
                        Once we develop the software focusing on core
                        functionalities, we will launch it for your users to start
                        using it. This will not only help minimize wastage but
                        also launch your service in the market quicker, helping
                        you further down to go ahead of your competitors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            data-circle="hide"
            data-theme="whiteBlack"
            data-arrowright = "hide"
            class="thankyou-section section half-dark-bg half-dark-bg-lr"
          >
            <div className="section-inner">
              <div class="container">
                <div class="row align-items-center flex-100">
                  <div class="col-md-7 bg-white">
                    <div class="section-title">
                      <h2> Continuous support </h2>
                      <p>
                        {" "}
                        This is a continuous approach where we take feedback that
                        may come from you, your workforce, or from your customers.
                        Our team uses this feedback to work on evolving the
                        software. We will work little by little and add other
                        required functions as required by your business to provide
                        optimum customer experience
                      </p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="fixed-content hero-services">
                      <h1 className="text-white">Thank You!</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="d-none d-sm-block d-md-none">
            <Footer />
          </div>
        </main>

      </HorizontalScrollElementLayout>
    </>
  );
};

export default Approches;
