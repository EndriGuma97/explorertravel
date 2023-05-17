import { useContext, useState } from "react";
import { SectionServices, ContainerServices, Subheading, HeadingSecondary, ContainerThreeGrids, FeatureTitle, FeatureText } from "./services.styles"
import {ReactComponent as Ticket} from '../img/ticket.svg';
import {ReactComponent as CarIcon} from '../img/caricon.svg';
import {ReactComponent as PlainIcon} from '../img/airplane-takeoff.svg';
import { LangContext } from "../contexts/lang-context";

const ServicesSection = () => {
    const { isEnglish, setIsEnglish } = useContext(LangContext);
 return (
    <SectionServices id="services">
    <ContainerServices>
       <Subheading as='span'>{isEnglish ? 'ABOUT OUR SERVICES' : 'RRETH SHËRBIMEVE TONA'}</Subheading>
       <HeadingSecondary>{isEnglish ? '15+ Years of Exceptional Services' : '15+ Vite Eksperiencë Në Shërbime Turistike'}</HeadingSecondary>
    </ContainerServices>
    <ContainerThreeGrids>
        <div className="feature">
            <div className='feature-icon'><Ticket className='icon'/></div>
            <FeatureTitle>{isEnglish ? 'Tickets' : 'Bileta'}</FeatureTitle>
            <FeatureText>{isEnglish ? 'Transportation options, including Airplanes, Buses, and Ferries' : 'Opsione transporti, duke përfshirë aeroplanë, autobusë dhe tragete'}</FeatureText>
        </div>
        <div className="feature">
            <div className='feature-icon'><PlainIcon className='icon'/></div>
            <FeatureTitle>{isEnglish ? 'Voyages' : 'Udhëtime'}</FeatureTitle>
            <FeatureText>{isEnglish ? 'Make memories with beautiful voyages and create lasting memories.' : 'Krijoni kujtime me udhëtime të bukura dhe eksperienca të paharrueshme'}</FeatureText>
        </div>
        <div className="feature">
            <div className='feature-icon'><CarIcon className='icon'/></div>
            <FeatureTitle>{isEnglish ? 'Rent a car' : 'Makina me Qira'}</FeatureTitle>
            <FeatureText>{isEnglish ? 'Rent affordable, reliable cars Anytime!' : 'Makina me qira çmime konkuruese në treg dhe në çdo kohë!'}</FeatureText>
        </div>

    </ContainerThreeGrids>

    </SectionServices>

 )
}

export default ServicesSection