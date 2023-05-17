import styled from 'styled-components'

export const SectionServices = styled.div`
 padding: 96px 0;
 @media (max-width: 850px) {
    padding: 48px 0;
  }

`

export const ContainerServices = styled.div`
max-width: 1200px;
padding: 0 32px;
margin: 0 auto;
@media (max-width: 850px) {
     
    max-width: 850px;
    padding: 0 26px;
 }
`

export const Subheading = styled.div`
display: block,
font-size: 20px;
font-weight: 500;
margin-bottom: 16px;
letter-spacing: 0.75px;
color: #4d4e6f;
@media (max-width: 850px) { 
    font-size: 12px;
    margin-bottom: 14px;
}
`

export const HeadingSecondary = styled.div`
font-weight: 700;
color: #010231, 
letter-spacing: -0.5px;
font-size: 44px;
line-height: 1.2;
margin-bottom: 96px;

@media (max-width: 1200px) {
    font-size: 36px; /* Adjust the font size for smaller screens */

  }

  @media (max-width: 1000px) {
    font-size: 32px; /* Adjust the font size for smaller screens */
    margin-bottom: 60px;

  }

  @media (max-width: 850px) { 

    font-size: 26px;
  }

  @media (max-width: 600px) { 

    font-size: 20px;
    margin-bottom: 34px;
  }

`

export const ContainerThreeGrids = styled.div`
max-width: 1200px;
padding: 0 32px;
margin: 0 auto;
display: grid;
  column-gap: 64px;
  row-gap: 96px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr)

  }

`

export const FeatureTitle = styled.div`
    font-size: 24px;
    color: #333;
    font-weight: 700;
    margin-bottom: 16px;
    @media (max-width: 1000px) {
        font-size: 18px; /* Adjust the font size for smaller screens */
    
      }
      @media (max-width: 850px) { 
        font-size: 17px;
      }
`

export const FeatureText = styled.div`
font-size: 18px;
  line-height: 1.8;
  @media (max-width: 1000px) {
    font-size: 16px; /* Adjust the font size for smaller screens */

  }

  @media (max-width: 850px) {

    font-size: 15px;
   }

   @media (max-width: 600px) {

    font-size: 14px;
   }
  `
