
import styled, {keyframes} from "styled-components";
import { useState, useEffect, useContext } from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import { LangContext } from "../contexts/lang-context";


const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const slideInAnimation = keyframes`
  0% {
    transform: translateY(-50%) translateX(-100%);
  }
  50% {
    transform: translateY(-50%) translateX(0);
  }
  75% {
    transform: translateY(-50%) translateX(5%);
  }
  100% {
    transform: translateY(-50%) translateX(0);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const RotatingImagesContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const RotatingImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  z-index: ${(props) => (props.show ? 1 : -1)};
`;

const Title = styled.h1`
  position: absolute;
  // top: 20%;
  // left: 10%;
  top: 47%;
  left: 8%;
  transform: translateY(-50%);
  font-size: 2.8rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
  color: #010231;
  font-weight: 700;
  z-index: 10;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px 15px;
  border-radius: 20px;
  animation: ${slideInAnimation} 2s ease-in-out forwards,
             ${fadeInAnimation} 2s ease-in-out forwards;
   @media (max-width: 912px) {
              font-size: 3.3rem /* Adjust the font size for smaller screens */
              // font-weight: 500;
            }

  // @media (max-width: 600px) {
  //   top: 25%;
  //   left: 5%;
  //   font-size: 2.5rem;
  //            }

  @media (max-width: 520px) {
    font-size: 3rem;
    font-weight: 700;
      
  }
`;

const BigButton = styled.button`
  position: absolute;
  // top: 48%;
  // left: 13%;
  top: 70%;
  left: 8%;
  font-size: 1.7rem;
  letter-spacing: -0.5px;
  padding: 1rem 2rem;
  background-color: #white;
  font-weight: 500;
  color: #010231;
  border: none;
  border-radius: 30px;
  z-index: 10;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
animation: ${slideInAnimation} 2s ease-in-out forwards,
             ${fadeInAnimation} 2s ease-in-out forwards;
 
@media (max-width: 912px) {
              font-size: 2.8rem; /* Adjust the font size for smaller screens */
              font-weight: 500;
              top: 70%;
              left: 8%;
            }

//  @media (max-width: 600px) {

// top: 46%;
//   left: 8%;

//  }

@media (max-width: 520px) {
  font-size: 2.8rem;
  top: 65.5%;
}
  
`;


const RotatingImages = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isEnglish, setIsEnglish } = useContext(LangContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <RotatingImagesContainer>
      <Container>
        <Title>{isEnglish ? 'Creating Memories,' : 'Krijoni Kujtime,'}<br/>{isEnglish ? 'One Trip at a Time.' : 'Nga Çdo Udhëtim.'}</Title>
        <BigButton onClick={() => {
          const cta = document.querySelector('#cta');

          cta.scrollIntoView({ behavior: 'smooth', block: 'center' });}
        }>{isEnglish ? 'Book Now' : 'Rezervo Tani'} &#8594;</BigButton>
        {images.map((image, index) => (
          <RotatingImage
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            show={index === currentImageIndex}
            initial={currentImageIndex === 0}
          />
        ))}
      </Container>
    </RotatingImagesContainer>
  );
};

export default RotatingImages;
