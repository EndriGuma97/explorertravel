// import { Fragment } from "react";
// import RotatingImages from "./home-page.styles";
// import ServicesSection from "../services/services.components";
// import TestimonialsComponent from "../testimonials/testimonials.component";


// const HomePage = () => {
//     return (
//         <Fragment>
//             <RotatingImages />
       
//         <ServicesSection />
//         <TestimonialsComponent />
//         <MyComponent />
//         </Fragment>
       
//     )
// }
// export default HomePage;

import { Fragment, useEffect } from "react";
import RotatingImages from "./home-page.styles";
import ServicesSection from "../services/services.components";
import TestimonialsComponent from "../testimonials/testimonials.component";
import styled, { keyframes } from "styled-components";
import { Element } from "react-scroll";
import Cta from "../cta/cta.component";
import Footer from "../footer/footer.component";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const AnimatedSection = styled(Element)`
  animation: ${fadeInUp} 1s ease-out;
`;

const AnimatedContent = styled.div`
  animation: ${scaleIn} 1s ease-out;
`;

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.getElementsByClassName("animated-section");
      Array.from(elements).forEach((element) => {
        const bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>

      <AnimatedSection name="animatedSection" className="animated-section">
        <AnimatedContent className="animated-content">
        <Fragment>
            <RotatingImages />
       
        <ServicesSection />
        <TestimonialsComponent />
        </Fragment>
         <Cta />
         <Footer />
        </AnimatedContent>
     
      </AnimatedSection>     
    </div>
  );
};

export default HomePage;

