import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NoFullScroll from "../../components/NoFullScroll";
import URL_LIST from "../../constants/url.constants";
import { callApi } from "../../utils/httpreq";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.body.setAttribute("titles", "Blogs");
    (async () => {
      const blogResponse = await callApi(URL_LIST.blogList);
      setBlogs(blogResponse.data);
    })();
  }, []);
  return (
    <NoFullScroll>
      <section
        data-theme="white"
        className="main blog-section section bg-white extra-top-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mb-5">
                <div className="col-md-10">
                  <h4 class="text-brand">Our Blogs</h4>
                  <h2>
                    {" "}
                    Check out our latest blogs to find what's new in technology,
                    and the future of business with digital transformation.
                  </h2>
                </div>
              </div>

              <div className="row">
                {blogs.map((item) => {
                  return (
                    <div className="col-md-6">
                      <div className="blog-item">
                        <div className="img-cont">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.attributes.thumbnail.data.attributes.url}`}
                            className="img-fluid"
                            alt="blog1"
                          />
                        </div>
                        <Link
                          href={`/blogs/${item.attributes.slug}`}
                          className="divLink"
                        >
                          {" "}
                        </Link>
                        <h3> {item.attributes.title}</h3>

                        <p> {item.attributes.shortDescription}</p>

                        <div className="media">
                          <div className="icon-box">
                            <img src="img/logo-blog-sm.png" alt="" />
                          </div>
                          <div className="blog-info">
                            <h5> LeanQ Digital </h5>
                            <p className="text-muted"> Apr 6 2022 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div class="fixed-gradient"></div>
    </NoFullScroll>
  );
};

export default Blogs;
