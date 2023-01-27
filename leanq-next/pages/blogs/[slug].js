import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NoFullScroll from "../../components/NoFullScroll";
import URL_LIST from "../../constants/url.constants";
import { callApi } from "../../utils/httpreq";
const BlogDetails = () => {
    const [details, setDetails] = useState([]);
    const router = useRouter();

    const {slug} = router.query;

    useEffect(()=>{
      document.body.setAttribute("titles", "BlogDetails");
      ( async ()=> {
        console.log("carrer detail query ", URL_LIST.careerDetail(slug))
        if(slug){

          const BlogDetailResponse = await callApi(URL_LIST.blogDetail(slug));
          // console.log("der", BlogDetailResponse.data);
          setDetails( BlogDetailResponse.data[0]);
        }
          
        })()
        
      },[slug])
     
      console.log("details", details);
  return (
    <NoFullScroll>
        <section
        data-theme="white"
        className="main blog-section section bg-white extra-top-padding"
      >
        <div class="fixed-gradient"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-header">
                <div className="media">
                  <div className="icon-box">
                    <img src="img/logo-blog-sm.png" alt="" />
                  </div>
                  <div className="blog-info">
                    <h5> {details?.attributes?.title} </h5>
                    <p className="text-muted"> Apr 6 2022 </p>
                  </div>
                </div>

                <ul className="list-unstyled social-icons">
                    <li> 
                        <span>Share</span>
                    </li>
                    <li>
                        <span> <img src="/img/fb.png" /></span>

                    </li>
                    <li>
                        <span> <img src="/img/instagram.png" /></span>

                    </li>
                    <li>
                        <span> <img src="/img/twitter.png" /></span>

                    </li>
                    <li>
                        <span> <img src="/img/youtube.png" /></span>

                    </li>
                </ul>
              </div>

              <div className="blog-body">
                <h2>What Technologies enable digital transformation?   </h2>
                <div className="main-img">
                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${details?.attributes?.thumbnail?.data?.attributes?.url}`} className="img-fluid" alt="" />

                </div>

                <div className="blog-content">
                    {details?.attributes?.description}
                    {/* <p>
                    There are numerous goals which can be achieved with custom illustrations. Title images for blog articles are one of them getting more and more popular from one resource to the other. Original graphics catch readers’ attention and quickly transfer the topic of the post. With extensive experience of creating unique graphics for Tubik Blog articles, our graphic designer Yaroslava Yatsuba shares tips and practices on creating blog illustrations.
                    </p>

                    <h3> General Approach </h3>

                    <p> Having got the task to illustrate the article for an IT blog for the first time, Yaroslava faced the problem of metaphoric transfer of the article theme by means of graphic design. The specific nature of the area required to search for new ideas for the task realization.
                    In her creative process, the designer has developed the following approach to the task. After getting a particular topic of the article and communication with the author or editor, she:</p>

                    <ul className="">
                        <li> analyzes the general message of the content </li>
                        <li> tries to define the core keyword which can become a point of departure for the illustration </li>
                        <li>runs parallels between it and other spheres of human activity </li>
                        <li> considers the ways to play out the theme via colors and shades. </li>
                    </ul>
                    
                    <p>As an example let’s check the illustration for an article Gestalt Principles in UI: Principle of Proximity. It has a simple static composition catching attention by means of textures and bright color accents.</p> */}

                </div>

                {/* <div className="row blog-gallery">
                    <div className="col-md-6">
                        <img src="/img/blog-gallery-1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src="/img/blog-gallery-2.png" className="img-fluid" alt="" />

                    </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>
        
        <section className="main">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2> More from Leanqdigital </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <div className="media related-blogs">
                            <div className="img-cont">
                                <img src="/img/other-blog-1.png" alt=""/>
                            </div>

                            <div className="media-content">
                                <h3> What Technologies enable digital transformation?  </h3>
                                <p> Companies in this age of technology can’t survive solely relying on traditional methods of business operation. </p>

                                <div className="media">
                                    <div className="icon-box">
                                        <img src="/img/logo-blog-sm.png" alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <h5> Anish Rokka </h5>
                                        <p className="text-muted"> Apr 6 2022 </p>
                                    </div>
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

export default BlogDetails;
