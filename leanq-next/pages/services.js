import Lottie from "lottie-react";
import apiAnimation from "../js/lottie/API.json";
import Monolith from "../js/lottie/Microservices.json";
import MVP from "../js/lottie/MVP.json";
import WebApplication from "../js/lottie/web-app.json";
import Maintainance from "../js/lottie/Maintainance.json";
import businessAutomation from "../js/lottie/Business-automation.json";
import mobileApp from "../js/lottie/Mobile-app.json";
import cloud from "../js/lottie/Cloud.json";
import ControlButtons from "../components/ControlButtons";
import { useEffect } from "react";
import Footer from "../components/Footer";
import HorizontalScrollElementLayout from "../components/HorizontalScrollElementLayout";

const Services = () => {
  useEffect(() => {
    document.body.setAttribute("titles", "Services");
  }, []);
  return (
    <HorizontalScrollElementLayout>
      <ControlButtons />

      <main id="horizontal-fullpage">
        <section
          data-circle="hide"
          data-arrowleft="hide"
          data-theme="whiteBlack"
          className="services-hero section half-dark-bg half-dark-bg-lr"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h4 className="text-brand">Services</h4>
                    <h2>
                      Our services cater to the <br /> changing needs of the
                      modern digital environment for every industry.{" "}
                    </h2>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content hero-services clip-text">
                    <h2>APIs</h2>
                    <p>
                      We develop an API for your business that and communication
                      between your syst your business to streamline its internal
                      provide better CX by connecting and le applications in one
                      place. Connect cus business excellence together with our a
                      <br />
                      Our API can help extend your business all the new-age
                      technology touchpoints adapting to fast-paced technology
                      innovations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="#api"
          data-circle="show-white"
          data-theme="black"
          className="section bg-dark"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>APIs</h2>
                    <p>
                      We develop an API for your business that allows smooth
                      integration and communication between your systems.
                      Integrating our API allows your business to streamline its
                      internal and external processes and provide better CX by
                      connecting and leveraging third-party applications in one
                      place. Connect customer experience and digital business
                      excellence together with our automated API.
                    </p>

                    <p>
                      Our API can help extend your business capabilities by
                      keeping up with all the new-age technology touchpoints as
                      customers are rapidly adapting to fast-paced technology
                      innovations. We make your information system more agile
                      and guarantee a more fluid information delivery and an
                      integrated user experience. We reveal a doorway of
                      creativity between departments, clients, and business
                      partners through API.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={apiAnimation}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="monolith"
          data-circle="show-black"
          data-theme="white"
          className="section bg-white"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7 bg-white">
                  <div className="section-title">
                    <h2>Monolith to Microservices</h2>
                    <p>
                      We migrate your monolithic business system to a
                      microservices architecture while maintaining business
                      continuity. We design microservices around your business
                      capabilities that have loose coupling and high functional
                      cohesion. We help you from the onset by incrementally
                      decomposing the system, applying the best migration
                      patterns, and also dealing with growing pains that you
                      will experience once you transition into a microservice
                      architecture.
                    </p>

                    <p>
                      With a microservices architecture, we help divide your
                      employees by creating teams managing their own databases
                      and APIs. This way each team is responsible for its own
                      data and logic leading to easy innovations, and quicker
                      product development & release.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={Monolith}
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mvp" data-theme="black" className="section bg-dark">
          <div className="">
            <div className="container">
              <div className="d-flex align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>MVP</h2>
                    <p>
                      We initially deliver you an MVP(Minimum Viable Product)
                      that can handle all the necessary core functionalities as
                      per your demand. Then we take your feedback into account
                      and make continuous improvements to the product in the
                      pursuit of making it a perfect one. Because of MVP, the
                      end product that we deliver to you will always be of top
                      quality fulfilling all your requirements.
                    </p>

                    <p>
                      Designing an MVP helps you in faster delivery of the
                      product which allows understanding of the product's
                      potential and position. MVP cuts-off waste and unnecessary
                      costs by determining things not needed in the product. The
                      MVP we design provides you the way to reinvent yourself in
                      the market.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={MVP}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="web-app" data-theme="white" className="section bg-white">
          <div className="">
            <div className="container">
              <div className="d-flex align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>Web Application</h2>
                    <p>
                      We develop tailored, scalable, and secure web applications
                      to meet your business goals. We only use tech tools that
                      have proven effective in the real-life business
                      environment to design and build a custom web application
                      just for you. The web application we design can allow you
                      to experience much higher levels of success while
                      improving problem-solving capabilities. We value customer
                      interaction, so we deliver high levels of customer service
                      through our web apps.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={WebApplication}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="maintainance"
          data-theme="black"
          className="section bg-dark"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>Maintenance</h2>
                    <p>
                      We not only help you in design and development but also
                      provide you with a long-term commitment to the maintenance
                      of our delivered services. Through our maintenance
                      services, we enhance the stability and functionality of
                      deployed software applications. We ensure that the
                      application is more secure, robust, and free from bugs and
                      errors even in the long run.
                    </p>

                    <p>
                      Our partnership with you is for the long run. So, we are
                      here with you as long as your business continues. During
                      that process, we continuously provide systematic
                      maintenance of the services we provide allowing your
                      business to grow.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={Maintainance}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="business-automation"
          data-theme="white"
          className="section bg-white"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>Buisness Automation</h2>
                    <p>
                      We automatize your business workflow using digital
                      infrastructure technologies for a seamless, fast, and
                      fault-free continuity of business processes and to improve
                      productivity. We use real-time analytics, AI, and process
                      automation in the functional process of business to
                      achieve automated digital operations. Business automation
                      will not only improve your workflow but also reduce costs
                      and errors and at the same time enhance customer
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={businessAutomation}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="web-app" data-theme="black" className="section bg-dark">
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>Mobile Application</h2>
                    <p>
                      We develop a custom mobile application that is the right
                      fit for your business by understanding its needs, pain
                      points, and inefficiencies. Whether be it native,
                      cross-platform, or progressive web apps, our experts at
                      Lean Q can develop a fast, responsive, reliable, and
                      functional mobile app. We use real-time analytics such as
                      user engagement, retention conversions, in-app purchases,
                      and ROI in mobile app development to make an informed
                      decision and accurately depict the success.
                    </p>

                    <p>
                      We also utilize AI in mobile apps to allow companies to
                      experience much higher levels of success while improving
                      problem-solving capabilities. We connect the Internet of
                      Things (IoT) and mobile apps to help you by automating
                      maintenance, infotainment tasks, safety procedures, and
                      diagnostics.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={mobileApp}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-theme="blackWhite"
          data-arrowright="hide"
          className="section half-dark-bg half-dark-bg-rl"
        >
          <div className="">
            <div className="container">
              <div className="row align-items-center flex-100">
                <div className="col-md-7">
                  <div className="section-title">
                    <h2>Cloud Services</h2>
                    <p>
                      We are a team of experts helping you design, develop and
                      migrate to a cloud environment, attentive to meeting your
                      far-sighted goals. We assist organizations to flourish in
                      their cloud environment with our experience to achieve
                      digital transformation through the adoption of cloud-based
                      technologies. Cloud technologies make your business
                      flexible, scalable, and agile. It takes away the
                      complexity and costs of managing IT enabling businesses to
                      innovate faster and reduce time to market.
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="fixed-content">
                    <Lottie
                      animationData={cloud}
                      background=""
                      speed="1"
                      loop
                      autoplay
                    ></Lottie>
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
  );
};

export default Services;
