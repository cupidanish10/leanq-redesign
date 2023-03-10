import { useEffect } from "react";
import Footer from "../components/Footer";
import VerticalScrollElementLayout from "../components/VerticalScrollElementLayout";
import ReactFullpage from "@fullpage/react-fullpage";
const About = () => {
  useEffect( ()=> {
    document.body.setAttribute("titles", "About")
},[])
  return (
    <ReactFullpage
    onLeave={(origin, destination, direction) => {
      console.log("des" ,destination);
      
      console.log( "atrs",destination.item.attributes)
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
          <main id="fullpage">
            <section  id="section-0" data-theme="white" className="about-hero section">
            <div className="fixed-gradient"></div>
              <div className="">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="section-title">
                        <h4 className="text-brand">About Us</h4>
                        <h2>We work with you like a two person organization.</h2>
                        <p>
                          At LeanQ, this is what we are all about. Established in
                          2021, we have evolved through various outsourcing models to
                          support our client???s DX to arrive at the concept of
                          continuous business growth as an outsourced partner with a
                          fixed monthly advisory fee.
                        </p>
  
                        <p>
                          We understand our clients??? vision and put them into practice
                          by consulting on a daily basis. We believe that business and
                          software cannot be separated, therefore, we dedicate a
                          software expert who can understand your business deeply and
                          is good at thinking through problems closer to business.
                        </p>
  
                        <p>
                          Our aim is to create highly cost effective software
                          solutions by eliminating unnecessary functions that do not
                          provide more value and become a partner of our customers to
                          support their never ending business growth.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="fixed-content masorny-gallery">
                        <figure>
                          <img
                            src="img/teams/pradip.jpg"
                            className=""
                            alt="A windmill"
                          />
                          
                        </figure>
                        <figure>
                          <img
                            src="img/teams/group.jpg"
                            className=""
                            alt="The Clifton Suspension Bridge"
                          />
                          
                        </figure>
                        <figure>
                          <img
                            src="img/teams/sudip-dai.jpg"
                            className=""
                            alt="Sunset and boats"
                          />
                          
                        </figure>
                        <figure>
                          <img
                            src="img/teams/convo.jpg"
                            className=""
                            alt="a river in the snow"
                          />
                          
                        </figure>
                        <figure>
                          <img
                            src="img/teams/aayushma.jpg"
                            className=""
                            alt="a single checked balloon"
                          />
                          
                        </figure>
                        <figure>
                          <img
                            src="img/teams/shreedhar.jpg"
                            className=""
                            alt="a hot air balloon shaped like a dog"
                          />
                          
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            </section>
  
            <section  id="section-2" data-theme="black" className="section about-cards mobile-bg-dark">
              <div className="">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="row mb-5">
                      <div className="col-md-10">
                        <h2>
                          We are known for our rapid growth, innovation, and thought
                          leadership, and the long-lasting partnerships
                        </h2>
                      </div>
                    </div>
  
                    <div className="row mt-5">
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/Quality.svg" alt="api" />
                          <h4> Quality</h4>
                          <p>
                            We believe in making things that make us proud to say
                            ???We did that???.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/Agility.svg" alt="api" />
                          <h4> Agility </h4>
                          <p>
                            We keep the goal always in sight, the results and
                            quality matter ??? not where, or when you work.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/Innovate.svg" alt="api" />
                          <h4> Innovation</h4>
                          <p>
                            We think out of the box and make use of any tools
                            necessary, to achieve the best possible outcome.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="service-list text-center">
                          <img src="img/Excellence.svg" alt="api" />
                          <h4> Excellence</h4>
                          <p>
                            We work continuously on improving our products and
                            services in the pursuit of excellence and perfection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              </div>
            </section>
  
            <section  id="section-3" data-theme="white" className="section about-cards">
              <div className="">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="row mb-5">
                      <div className="col-md-10">
                        <h2 className="mb-0">
                          We are a team of professionals who bring integrity, to
                          every project we are a part of.
                        </h2>
                      </div>
                    </div>
  
                    <div className="row mt-5">
                      <div className="col-md-3 col-6">
                        <div className="team-list text-center">
                          <img src="img/teams/single/sanjay.png" alt="api" />
                          <h4> Sanjay Lamichhane</h4>
                          <p className="m-0">CEO/Founder</p>
                        </div>
                      </div>
  
                      <div className="col-md-3 col-6">
                        <div className="team-list text-center">
                          <img src="img/teams/single/sundeep.png" alt="api" />
                          <h4> Sudeep Gautam</h4>
                          <p className="m-0">CTO</p>
                        </div>
                      </div>
  
                      <div className="col-md-3 col-6">
                        <div className="team-list text-center">
                          <img src="img/teams/single/shreedhar.jpg" alt="api" />
                          <h4> Shreedhar Bhandari </h4>
                          <p className="m-0"> Content Writer</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="team-list text-center">
                          <img src="img/teams/single/pradeep.png" alt="api" />
                          <h4> Pradeep Parajuli </h4>
                          <p className="m-0">Backend developer( Senior)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              </div>
            </section>
  
            <Footer className="section mobile-bg-dark" />
          </main>
        </VerticalScrollElementLayout>

      )
    }}
    />
  );
};

export default About;
