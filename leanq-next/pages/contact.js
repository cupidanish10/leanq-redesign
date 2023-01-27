import { useState } from "react";
import Footer from "../components/Footer";
import URL_LIST from "../constants/url.constants";
import { callApi } from "../utils/httpreq";
import NoFullScroll from "../components/NoFullScroll";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    budget: 0,
    aboutBusiness: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const CareerApplyResponse = await callApi(URL_LIST.contact, "POST", {
        data: contactData,
      });
      console.log("CareerApplyResponse", CareerApplyResponse);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  return (
    <NoFullScroll>
      <main>
        <section data-theme="white" className="section">
        <div className="fixed-gradient"></div>
          <div class="container">
            <div class="row flex-100 align-items-center">
              <div class="col-md-12">
                <div class="row mb-2">
                  <div class="col-md-10">
                    <h2>
                      {" "}
                      B
                      <span class="text-brand">
                        <span class="rotate-30">e</span>
                      </span>
                      come a client
                    </h2>

                    <p>
                      {" "}
                      We’ve helped our clients successfully transition their
                      businesses into digital platforms and surpass their
                      competitors. Now it’s your turn. Contact us today to start
                      the journey of digital transformation.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-10">
                    <form onSubmit={handleSubmit} class="brand-form">
                      <div class="mb-3">
                        <input
                          name="name"
                          onChange={handleInputChange}
                          required
                          type="text"
                          placeholder="Name"
                          class="form-control"
                          id=""
                          aria-describedby=""
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          name="email"
                          onChange={handleInputChange}
                          required
                          type="email"
                          placeholder="Email"
                          class="form-control"
                          id=""
                          aria-describedby=""
                        />
                      </div>

                      <div class="mb-3">
                        <input
                          name="company"
                          onChange={handleInputChange}
                          required
                          type="text"
                          placeholder="Company"
                          class="form-control"
                          id=""
                          aria-describedby=""
                        />
                      </div>
                      {/* <div class="mb-3">
                        <input
                        name=""
                        onChange={handleInputChange}
                        required  
                        type="text"
                          placeholder="Budget"
                          class="form-control"
                          id=""
                          aria-describedby=""
                        />
                      </div> */}
                      <div class="mb-3">
                        <textarea
                          required
                          name="aboutBusiness"
                          onChange={handleInputChange}
                          placeholder="Tell us about your business"
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                      <p>
                        By filling this form, You agree to our Privacy Policy
                        including our cookie use.
                      </p>
                      <button
                        type="submit"
                        class="btn btn-brand-primary btn-xl"
                      >
                        {" "}
                        Get in Touch{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </NoFullScroll>
  );
};

export default Contact;
