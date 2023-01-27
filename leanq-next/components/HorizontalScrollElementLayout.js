import { useEffect, useState } from "react";
import Theme from "../constants/url.theme";

const HorizontalScrollElementLayout = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target);
            let currentTheme = Theme[entry.target.dataset.theme];
            if (currentTheme) {
              if (entry.target.dataset.circle == "hide") {
                document.body.className = "hide";
              } else {
                document.body.className = currentTheme.circleClass || "";
              }

              if (entry.target.dataset.arrowright == "hide") {
                document
                  .getElementById("right-arrow")
                  ?.classList?.add("fade-icon");
              } else {
                document
                  .getElementById("right-arrow")
                  ?.classList?.remove("fade-icon");
              }
              if (entry.target.dataset.arrowleft == "hide") {
                document
                  .getElementById("left-arrow")
                  ?.classList?.add("fade-icon");
              } else {
                document
                  .getElementById("left-arrow")
                  ?.classList?.remove("fade-icon");
              }

              document.getElementById("top-nav-js").classList = "";
              document
                .getElementById("top-nav-js")
                .classList.add(currentTheme.navClass);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  useEffect(() => {
    const showPreviousSection = () => {
      if (!activeSection) {
        return;
      }
      let previousSection = activeSection.previousElementSibling;
      if (previousSection) {
        previousSection.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };

    const showNextSection = () => {
      if (!activeSection) {
        return;
      }
      let nextSection = activeSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const rightArrow = document.getElementById("right-arrow");
    const leftArrow = document.getElementById("left-arrow");

    rightArrow.addEventListener("click", showNextSection);
    leftArrow.addEventListener("click", showPreviousSection);
  }, [activeSection]);
  return <>{props.children}</>;
};
export default HorizontalScrollElementLayout;
