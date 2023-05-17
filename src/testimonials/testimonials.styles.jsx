import styled from 'styled-components'

export const SectionTestimonials = styled.div`
background-color: #fdf2e9;
display: grid;
grid-template-columns: 60fr 40fr;
align-items: center;
@media (max-width: 850px) { 
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 520px) { 
  grid-template-columns: 60fr 40fr;
}
`

export const TestimonialsContainer = styled.div`
padding: 96px;
@media (max-width: 850px) { 
    padding: 60px;
}

@media (max-width: 600px) { 
  padding: 48px;
}
`

export const Testimonials = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 48px;
column-gap: 80px;

@media (max-width: 850px) { 
  grid-template-columns: 1fr;
}
`

export const TestimonialText = styled.p`
font-size: 16px;
  line-height: 1.8;
  margin-bottom: 16px;

  @media (max-width: 1000px) {
    font-size: 14px; /* Adjust the font size for smaller screens */
  }
  @media (max-width: 850px) {
    font-size: 12px; /* Adjust the font size for smaller screens */
  }
  @media (max-width: 520px) {
    font-size: 11px; /* Adjust the font size for smaller screens */
  }
`

export const TestimonialName = styled.p`
font-size: 16px;
  color: #6f6f6f;
  @media (max-width: 1000px) {
    font-size: 14px; /* Adjust the font size for smaller screens */
  }
  @media (max-width: 1000px) {
    font-size: 12px; /* Adjust the font size for smaller screens */
  }
`



