import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import URL_LIST from "../constants/url.constants";
import { callApi } from "../utils/httpreq";
import NoFullScroll from "../components/NoFullScroll"

const Work = () => {
  useEffect(() => {
    document.body.setAttribute("titles", "Works");
  }, []);

  const [works, setWorks] = useState([]);

  

  useEffect(()=>{
  ( async ()=> {
      const workResponse = await callApi(URL_LIST.workList);
      setWorks( workResponse.data );
    })()
    
  },[])
 
  // console.log("works", works)

  return (
    <NoFullScroll>
      <main>
        <section data-theme="white" className="main work-section section bg-white">
        <div class="fixed-gradient"></div>
          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-md-12">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <div className="section-title">
                      <h4 className="text-brand">Our Works</h4>
                      <h2>
                        Our innovative work has automated clients' business
                        processes & changed their trajectory toward success.
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  { works.map( (item) => {
                   
                    return(
                      <div className="col-md-4" key={item.id}>
                        <div className="card reset-card work-card">
                          <figure>
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.attributes.thumbnail.data.attributes.url}`}
                              className="img-fluid"
                              alt=""
                            />
                          </figure>
    
                          <div className="card-body">
                            <h3> {item.attributes.title} </h3>
                            <a href={item.attributes.url} className="btn btn-link">
                              {" "}
                              {item.attributes.buttonText} <img
                                src="img/chevron-right.svg"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                        </div>
                    </div>
                   
                    )
                  })}
                  
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

export default Work;
