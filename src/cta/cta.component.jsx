import { useState, useContext} from 'react';
import { ContainerServices } from "../services/services.styles";
import { CtaHeading } from "./cta.styles";
import { LangContext } from '../contexts/lang-context';

const Cta = () => {
  const { isEnglish, setIsEnglish } = useContext(LangContext);
    return (
      
        <div className="section-cta" id="cta">
            <ContainerServices>
                <div className="cta">
                    <div className="cta-text-box">
                        <CtaHeading>{isEnglish ? 'Please provide your information and preferences for a personalized travel experience!' : 'Ju lutem jepni informacion mbi preferencat tuaja për një përvojë udhëtimi të personalizuar!'}</CtaHeading>
                        <p className="cta-text">{isEnglish ? 'Additionally, we would love to know your estimated budget for this trip, ensuring that we design an itinerary that matches your financial preferences.' : 'Për më tepër, mund të shkruani buxhetin tuaj që mendoni për këtë udhëtim, që ne të mund të hartojmë një itinerar që përputhet me preferencat tuaja.'}</p>
                        <form className="cta-form" action='https://docs.google.com/forms/d/e/1FAIpQLScxqV80aUAPBZJHQwFur_jYN8sFaCuTCvU2ThpHXa0JmYMu4g/formResponse'>
                        <div>
                  <label for="full-name">{isEnglish ? 'Name' : 'Emër'}</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="entry.126191448"
                    required
                  />
                </div>

                <div>
                  <label for="email">{isEnglish ? 'Email address' : 'Adres email'}</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="entry.1314964949"
                    required
                  />
                </div>
                <div>
                  <label for="phone-number">{isEnglish ? 'Phone' : 'Numër i juaj celulari'}</label>
                  <input
                    id="estimated-budget"
                    type="text"
                    placeholder="(+355)*********"
                    name="entry.1029303331"
                    required
                  />
                </div>
                <div>
                  <label for="estimated-budget">{isEnglish ? 'What is your estimated budget for this trip?' : 'Cili është buxheti që keni menduar për këtë udhëtim?'}</label>
                  <input
                    id="estimated-budget"
                    type="text"
                    placeholder={isEnglish ? 'Example: 400-500 euro' : 'Shembull: 400-500 euro'}
                    name="entry.1925149128"
                    required
                  />
                </div>
                <div>
                  <label for="additional-information">{isEnglish ? 'Additional Information' : 'Informactione të mëtejshme'}</label>
                  <textarea
                    id="additional-information"
                    type="text"
                    placeholder={isEnglish ? 'Example I have my wedding anniversay, I want ideas :)' : 'Shembull: Kam përvjetorin tim të martesës, dua ide :)'}
                    name="entry.1723518471"
                    rows="4" cols="50"
                    required
                  />
                </div>
                <button className="btn btn--form">{isEnglish ? 'Submit' : 'Shtyp/Dërgo'}</button>
                        </form>

                    </div>
                    <div className="cta-img-box"
                    role="img"
                    aria-label='Touristic Attractions'></div>
                    
                </div>
            </ContainerServices>
            
        </div>
    )
}

export default Cta;