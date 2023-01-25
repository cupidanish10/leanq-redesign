import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import $ from "jquery";

function MyApp({ Component, pageProps }) {
  // $(document).ready(function () {
  //
  console.log("working");

  if (typeof window != "undefined") {
    console.log("window ");
    $(document.body).attr("title", $("head title").html());

    $(".hamburger-icon").on("click", function (e) {
      $(".mobile-menu").toggleClass("toggle-nav"); //you can list several class names
      $(".top-nav").toggleClass("d-none");
      e.preventDefault();
    });

    $(".navbar-close").on("click", function (e) {
      $(".mobile-menu").toggleClass("toggle-nav"); //you can list several class names
      $(".top-nav").removeClass("d-none");
      $(".top-nav").addClass("d-flex");
      e.preventDefault();
    });
  }

  //  });
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      {/* <Script id="main-js" src="../js/main.js" strategy="beforeInteractive" /> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollToPlugin.min.js"
      ></script>
      <Script id="obj-js" src="js/main.js" strategy="beforeInteractive" />
      {/* <Script
        id="obj-js"
        src="js/observation.js"
        strategy="beforeInteractive"
      /> */}

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
