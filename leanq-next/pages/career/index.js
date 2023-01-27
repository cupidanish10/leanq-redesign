import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NoFullScroll from "../../components/NoFullScroll";
import URL_LIST from "../../constants/url.constants";
import { callApi } from "../../utils/httpreq";

const Career = () => {
  const [career, setCareers] = useState([]);
  useEffect(() => {
    document.body.setAttribute("titles", "Career");
    (async () => {
      const careerResponse = await callApi(URL_LIST.careerList);
      setCareers(careerResponse.data);
    })();
  }, []);

  return (
    <NoFullScroll>
      <section
        data-theme="white"
        className="main work-section section bg-white extra-top-padding"
      >
         <div class="fixed-gradient"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-4">
                <div className="col-md-10">
                  <h2>
                    {" "}
                    Curr
                    <span className="text-brand">
                      <span className="rotate-30">e</span>
                    </span>
                    nt Openings
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="career-list">
                    {career.map((item) => {
                      // console.log("item", item)
                      return (
                        <div className="career-item">
                          <h4> {item.attributes.name}</h4>
                          <div>
                            <span> {item.attributes.jobType}</span>/{" "}
                            <span>{item.attributes.timeType}</span>/
                            <span>{item.attributes.jobLocation}</span>
                          </div>
                          <p> {item.attributes.shortDescription}</p>
                          <Link
                            href={`/career/${item.attributes.slug}`}
                            className="btn btn-brand-primary"
                          >
                            {" "}
                            View Job{" "}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
     
    </NoFullScroll>
  );
};

export default Career;
