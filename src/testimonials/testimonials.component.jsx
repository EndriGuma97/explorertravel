import { useContext, useState } from 'react';
import { ReactComponent as UserIcon } from '../img/user.svg'
import { Subheading, HeadingSecondary} from '../services/services.styles'
import { SectionTestimonials, TestimonialsContainer, Testimonials, TestimonialText, TestimonialName } from './testimonials.styles'
import gallery1 from '../img/gallery1.jpg';
import gallery2 from '../img/gallery2.jpg';
import gallery3 from '../img/gallery3.jpg';
import gallery4 from '../img/gallery4.jpg';
import gallery5 from '../img/gallery5.jpg';
import gallery6 from '../img/gallery6.jpg';
import { LangContext } from '../contexts/lang-context';

const TestimonialsComponent = () => {
    const { isEnglish, setIsEnglish } = useContext(LangContext);

    return (<SectionTestimonials>
        
        <TestimonialsContainer>
            <Subheading as="span">{isEnglish ? 'Testimonials' : 'Dëshmi/Komente'}</Subheading>
            <HeadingSecondary>{isEnglish ? 'What Our Travelers Have to Say About Us' : 'Disa Komente Mbi Shërbimet Tona'}</HeadingSecondary>
            <Testimonials>
                <div className="testimonal"  id='testimonials'>
                    <UserIcon className='icon'/>
                    <TestimonialText>{isEnglish ? '(Taken from Google Reviews) I took a day trip with them during my stay in Tirana. The owner is a very helpful and nice person and speaks excellent Italian. The organization of the excursion was perfect.' : '(Marrë nga Google Reviews) Kam bërë një udhëtim ditor me ta gjatë qëndrimit tim në Tiranë. Pronari është një person i gatshëm për të ndihmuar,i këndshëm dhe flet shkëlqyeshëm italisht. Organizimi i ekskursionit ishte perfekt.'}</TestimonialText>
                    <TestimonialName>&mdash; Gianluca</TestimonialName>

                </div>
                <div className="testimonal">
                    <UserIcon className='icon'/>
                    <TestimonialText>{isEnglish ? '(Taken from Google Reviews) I booked a flight through this agency and I was blown away by the efficiency and professionalism of Explorer Travel.' : '(Marrë nga Google Reviews) Rezervova një fluturim përmes kësaj agjencie dhe u mahnita nga efikasiteti dhe profesionalizmi i Explorer Travel.'}</TestimonialText>
                    <TestimonialName>&mdash; Jurgen</TestimonialName>

                </div>
                <div className="testimonal">
                    <UserIcon className='icon'/>
                    <TestimonialText>{isEnglish ? '(Local Guide) Great service and very friendly staff!' : '(Local Guide) Shërbim i shkëlqyer dhe staf shumë miqësor!'}</TestimonialText>
                    <TestimonialName>&mdash; Sultan</TestimonialName>

                </div>
    
                <div className="testimonal">
                    <UserIcon className='icon'/>
                    <TestimonialText>{isEnglish ? '(Taken from Google Reviews) Correct and polite people.' : '(Marrë nga Google Reviews) Njerëz të rregullt dhe të sjellshëm.'}</TestimonialText>
                    <TestimonialName>&mdash; Desara</TestimonialName>

                </div>
            </Testimonials>
        
        </TestimonialsContainer>

        <div className='gallery'>
            <div className='gallery-item'>
                <img src={gallery1} alt='turistic attraction'/>
            </div>
            <div className='gallery-item'>
                <img src={gallery2} alt='turistic attraction'/>
            </div>
            <div className='gallery-item'>
                <img src={gallery3} alt='turistic attraction'/>
            </div>
            <div className='gallery-item'>
                <img src={gallery4} alt='turistic attraction'/>
            </div>
            <div className='gallery-item'>
                <img src={gallery5} alt='turistic attraction'/>
            </div>
            <div className='gallery-item'>
                <img src={gallery6} alt='turistic attraction'/>
            </div>
        </div>
        

    </SectionTestimonials>)

   

}

export default TestimonialsComponent;