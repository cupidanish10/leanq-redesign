import { useEffect, useState } from "react";
import Theme from "../constants/url.theme";

const VerticalScrollElementLayout = (props) => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inView")
            let currentTheme = Theme[entry.target.dataset.theme];
            if (currentTheme) {
              if (entry.target.dataset.circle == "hide") {
                document.body.className = "hide";
              } else {
                document.body.className = currentTheme.circleClass || "";
              }
              document.getElementById("top-nav-js").classList = "";
              document
                .getElementById("top-nav-js")
                .classList.add(currentTheme.navClass);
              entry.target.classList.replace("fadeOut", "fadeIn");
            }
          } else {
            entry.target.classList.replace("fadeIn", "fadeOut");
            entry.target.classList.remove("inView");
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return <>{props.children}</>;
};
export default VerticalScrollElementLayout;
