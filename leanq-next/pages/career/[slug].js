import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NoFullScroll from "../../components/NoFullScroll";
import URL_LIST from "../../constants/url.constants";
import { callApi } from "../../utils/httpreq";

const CareerDetails = () => {
  const [details, setDetails] = useState([]);
  const [applicantData, setApplicantData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    safetyAgreement: false,
  });
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    document.body.setAttribute("titles", "CareerDetails");
    (async () => {
      console.log("carrer detail query ", URL_LIST.careerDetail(slug));
      if (slug) {
        const CareerDetailResponse = await callApi(URL_LIST.careerDetail(slug));
        // console.log("der", CareerDetailResponse.data);
        setDetails(CareerDetailResponse.data[0]);
      }
    })();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("upload");
    if (!applicantData.safetyAgreement) {
      console.log("error");
      throw new Error("Please agree to the safety agreement");
    }

    let formData = new FormData();

    if (resume) {
      formData.append("files.resume", resume);
    }
    if (resume) {
      formData.append("files.coverLetter", resume);
    }
    formData.append(
      "data",
      JSON.stringify({
        ...applicantData,
        career: details._id,
      })
    );

    const CareerApplyResponse = await callApi(
      URL_LIST.careerApply,
      "post",
      formData,
      true
    );
  };

  const handleInputChange = (e) => {
    const { name, value, files, type } = e.target;
    if (name === "resume") {
      return setResume(files[0]);
    }
    if (name === "coverLetter") {
      return setCoverLetter(files[0]);
    }

    if (type == "checkbox") {
      console.log("e.target.checked", e.target.checked);
      return setApplicantData({
        ...applicantData,
        [name]: e.target.checked,
      });
    }
    setApplicantData({
      ...applicantData,
      [name]: value,
    });
  };

  return (
    <NoFullScroll>
      <section
        data-theme="white"
        className="main career-section section bg-white extra-top-padding"
      >
        <div class="fixed-gradient"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-wrapper">
                <h2>{details?.attributes?.name}</h2>

                <div className="py-3">
                  <span> {details?.attributes?.jobType}</span>/{" "}
                  <span>{details?.attributes?.timeType}</span>/
                  <span>{details?.attributes?.jobLocation}</span>
                </div>
                <div className="content-block">
                  {details?.attributes?.description}

                  {/* <h4> Objectives of the Role </h4>
                    <ul className="">
                      <li>
                        Obtain a deep understanding of products and services to
                        translate complex product information into simple,
                        polished, and engaging content
                      </li>
                      <li>
                        Write user-friendly content that meets the needs of the
                        target audience{" "}
                      </li>
                    </ul> */}
                </div>
                {/* <div className="content-block">
                    <h4> Responsibilities </h4>
                    <ul className="">
                      <li>
                        Develop product manuals, how-to guides, website help
                        sections, journal articles, and other content that
                        distills technical information
                      </li>
                      <li>
                        Research, outline, write, and edit new and existing
                        content, working closely with various departments{" "}
                      </li>
                      <li>
                        {" "}
                        Determine a clear and logical way to present information
                        for reader comprehension{" "}
                      </li>
                      <li>
                        {" "}
                        Meet with subject matter experts to ensure specialized
                        topics are appropriately addressed{" "}
                      </li>
                      <li>
                        {" "}
                        Review and/or edit content developed by other members of
                        the team{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="content-block">
                    <h4> Skills &amp; Qualification </h4>
                    <ul className="">
                      <li>Bachelor’s degree in relevant subject preferred</li>
                      <li>
                        2 years+ industry experience as an effective technical
                        writer{" "}
                      </li>
                      <li>
                        Proven ability to quickly learn and understand complex
                        topics
                      </li>
                      <li>
                        {" "}
                        Previous experience writing documentation and procedural
                        materials{" "}
                      </li>
                      <li>
                        {" "}
                        Superior written and verbal communication skills, with a
                        keen eye for detail{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="content-block">
                    <h4> Benefits </h4>
                    <ul className="">
                      <li>Fun and friendly people to work with</li>
                      <li>Flexible working hours </li>
                    </ul>
                  </div> */}
              </div>

              <div className="apply-form">
                <h3> Apply Now </h3>
                <form onSubmit={handleSubmit} class="brand-form">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="fullname"
                      onChange={handleInputChange}
                      required
                      name="name"
                      aria-describedby="nameHelp"
                      placeholder="Name*"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      onChange={handleInputChange}
                      required
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email*"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      onChange={handleInputChange}
                      required
                      name="phone"
                      class="form-control"
                      id="pnumber"
                      placeholder="Phone Number*"
                    />
                  </div>

                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Your Message*"
                      rows="5"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label>Resume*</label>
                    <input
                      type="file"
                      onChange={handleInputChange}
                      required
                      name="resume"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Resume*"
                    />
                  </div>
                  <div class="mb-3">
                    <label>Cover Letter</label>
                    <input
                      type="file"
                      onChange={handleInputChange}
                      name="coverLetter"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Cover* Letter"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      onChange={handleInputChange}
                      required
                      name="safetyAgreement"
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      class="form-check-label confirm-checkbox"
                      for="exampleCheck1"
                    >
                      Your personal data will be processed by Leanqdigital
                      according to our Privacy Policy.We respect your personal
                      data and guarantee it’s safety.
                    </label>
                  </div>
                  <button type="submit" class="btn btn-brand-primary btn-xl">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </NoFullScroll>
  );
};

export default CareerDetails;
