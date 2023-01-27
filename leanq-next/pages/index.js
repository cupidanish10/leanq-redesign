import React, { useEffect, useState } from "react";
import Head from "next/head";
import Lottie from "lottie-react";
import patternAnimation from "../js/lottie/homepage.json";
import Footer from "../components/Footer";
import CategorySlider from "../components/CategorySlider";
import VerticalScrollElementLayout from "../components/VerticalScrollElementLayout";
import ReactFullpage from "@fullpage/react-fullpage";
import { callApi } from "../utils/httpreq";
import URL_LIST from "../constants/url.constants";

export default function Home({ categories }) {

  console.log("categories", categories);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.setAttribute("titles", "Home");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 8000);


  }, []);



  return (

    <ReactFullpage className="hp-section"
      onLeave={(origin, destination, direction) => {
        console.log("des", destination);

        console.log("atrs", destination.item.attributes)
        let attr = destination.item.attributes[1].nodeValue;



        if (window.innerWidth > 997) {
          if (attr == "white") {
            document.body.style.background = "#fff";
          }

          if (attr == "black") {
            document.body.style.background = "#212529";
          }

        }


      }}

      responsiveWidth={900}
      render={(data) => {
        const { state, fullpageApi, destination, origin } = data;
        console.log("state", origin)
        fullpageApi?.setKeyboardScrolling(true);
        if (fullpageApi?.getScrollY() > 100) {
          typeof window != "undefined" && document.getElementById("fullpage")?.classList?.add("bottom-0");
        } else {
          typeof window != "undefined" && document.getElementById("fullpage")?.classList?.remove("bottom-0");
        }

        return (
          <VerticalScrollElementLayout>
            <Head>
              <title>Home</title>
              <meta name="description" content="Generated by create next app" />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"
              />
            </Head>
            <section
              id="section-1"
              data-theme="white"
              className="section hero main"
            >
              <div className="fixed-gradient"></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-11">
                        <div className="hero-content">
                          <h5>And Reliable Services </h5>
                          <h1>
                            {" "}
                            A Soft{" "}
                            <span className="text-bg">
                              War
                              <span className="text-brand">
                                <span className="rotate-30">e</span>
                              </span>
                              house
                            </span>{" "}
                             with Strong Business Acumen
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section-2"
              data-theme="black"
              className="section main-md  work-section section mobile-bg-dark"
            >
              <div className="container">
                <div className="">
                  <div class="abs-slider-item">
                    <CategorySlider categories={categories} />
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section-3"
              data-theme="black"
              className="section  main  work-section mobile-bg-dark"
            >
              <div className="container">
                <div className="row  align-items-center">
                  <div className="col-md-12">
                    <div className="row mb-5 mt-5">
                      <div className="col-md-10">
                        <h2>
                          We D
                          <span className="text-brand">
                            <span className="rotate-30 movetext">e</span>
                          </span>
                          sign, Build, and Integrate Data-Driven Software and User Experiences
                        </h2>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/icons/api.svg" alt="api" />
                          <h4> API Integration </h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img
                            src="img/icons/monolith-microservices.svg"
                            alt="api"
                          />
                          <h4> Monolith to Microservices</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/icons/mvp.svg" alt="api" />
                          <h4> MVP Launch</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/icons/web-app.svg" alt="api" />
                          <h4>Custom Web Apps</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/icons/maintainance.svg" alt="api" />
                          <h4>Software Maintenance</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img
                            src="img/icons/business-automation.svg"
                            alt="api"
                          />
                          <h4> Business Process Automation </h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img
                            src="img/icons/mobile-application.svg"
                            alt="api"
                          />
                          <h4> Mobile Apps </h4>
                        </div>
                      </div>
                      <div className="col-md-3  col-6">
                        <div className="service-list text-center">
                          <img src="img/icons/cloud-services.svg" alt="api" />
                          <h4> Cloud Services </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section-4"
              data-theme="white"
              className="section main function-section"
            >
              <div className="container">
                <div className="row  align-items-center">
                  <div className="col-md-12">
                    <div className="row mb-5">
                      <div className="col-md-10">
                        <h2 className="m-0">
                          Discov
                          <span className="text-brand">
                            <span className="rotate-30">e</span>
                          </span>
                          r Your North Star
                        </h2>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-md-6">
                        <div className="fixed-content lottie-sm">
                          <Lottie
                            animationData={patternAnimation}
                            background=""
                            speed="1"
                            loop
                            autoplay
                          ></Lottie>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="function-list">
                          <div className="function-item">
                            <h5>
                              {" "}
                              <span className="text-brand">L</span>iberate Unnecessary Functions
                            </h5>
                            <p>
                              {" "}
                              We omit redundant functions to save you time and money. Plan a product with only essential functions(or KPIs)
                            </p>
                          </div>
                          <div className="function-item">
                            <h5>
                              {" "}
                              <span className="text-brand">E</span>mpathize with your
                              users{" "}
                            </h5>
                            <p>
                              {" "}
                              We devise your product in a cross-functional and user-centric way to meet your users’ perspectives, needs, and motivations. (innovate)
                            </p>
                          </div>
                          <div className="function-item">
                            <h5>
                              {" "}
                              <span className="text-brand">A</span>ct on MVP
                              service delivery{" "}
                            </h5>
                            <p>
                              {" "}
                              We create a minimal viable product with just enough essential features for you to test the concept, provide feedback and validate the product idea.
                            </p>
                          </div>
                          <div className="function-item">
                            <h5>
                              {" "}
                              <span className="text-brand">N</span>urture your Growth{" "}
                            </h5>
                            <p>We will aid you in product maintenance as long as you need us. You can keep growing with LEAN. (continuous) </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section-5"
              data-theme="white"
              className="section main clients-section"
            >
              <div className="container">
                <div className="row  align-items-center">
                  <div className="col-md-12">
                    <div className="row mb-5">
                      <div className="col-md-10">
                        <h2 className="m-0">
                          Achi
                          <span className="text-brand">
                            <span className="rotate-30">e</span>
                          </span>
                          ve Your KPIs with Our Technical Expertise
                        </h2>
                      </div>
                    </div>

                    <div className="row mt-5 justify-content-center">
                      <div className="col-md-3 col-4">
                        <div className="client-logo">
                          <img
                            src="img/clients/figma.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-center">
                          <img
                            src="img/clients/kintone.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col-md-3 col-4">
                        <div className="client-logo  text-center">
                          <img
                            src="img/clients/android.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-end">
                          <img
                            src="img/clients/ontraport.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo">
                          <img
                            src="img/clients/aws.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-center">
                          <img
                            src="img/clients/java.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-center">
                          <img
                            src="img/clients/adobe.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-end">
                          <img
                            src="img/clients/strapi.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo">
                          <img
                            src="img/clients/php.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-center">
                          <img
                            src="img/clients/flutter.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-center">
                          <img
                            src="img/clients/wordpress.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-4">
                        <div className="client-logo text-end">
                          <img
                            src="img/clients/googleanalytics.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer className="section hp-footer" />


          </VerticalScrollElementLayout>
        );
      }}
    />
  );
}

export async function getServerSideProps() {
  const homeResponse = await callApi(URL_LIST.homeCategory, "GET");

  return { props: { categories: homeResponse.data, test: "Hello" } }
}
