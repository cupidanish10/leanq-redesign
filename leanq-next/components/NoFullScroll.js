import { useEffect } from "react";
import Theme from "../constants/url.theme";
const NoFullScroll = (props) => {
  useEffect(() => {
    const topNav = document.getElementById("top-nav-js");
    const sections = document.querySelectorAll(".section");
    document.addEventListener("scroll", () => {

       //making nav transparent if it is in the top
       if( topNav.getBoundingClientRect().top == 0){
        document.getElementById("color-nav").classList.add("bg-transparent")
      }else{
        document.getElementById("color-nav").classList.remove("bg-transparent")

      }
      
      //checking scroll on section to change nave color
      sections.forEach((section) => {
        console.log(section.getBoundingClientRect().top);
        if (section.getBoundingClientRect().top <= 5) {
          // when the section is above the viewport
          let currentTheme = Theme[section.dataset.theme];
          if (currentTheme) {
            topNav.classList = "";
            topNav.classList.add(currentTheme.navClass);


            // for nav background color
            if (currentTheme?.navClass == "white") {
              const colorNav = document.querySelector("#color-nav");
              colorNav.style.backgroundColor = "#fff";
            }else{
              const colorNav = document.querySelector("#color-nav");
              colorNav.style.backgroundColor = "#212529";
  
            }
          }

          
        }
      });
    });
  }, []);

  return <>{props.children}</>;
};

export default NoFullScroll;
