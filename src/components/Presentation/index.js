import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import { Paragraph, Section, SectionImg, SectionInfo, CardInfo, InfoTitle, Img, TitleSection, HrSection } from '../GlobalStyle';

import profile from '../../assets/profile.png';

class Presentation extends Component {
    constructor(props) {
        super(props);

        this.animation = new TimelineLite();

        this.section = null;
        this.infotitle = null;
        this.paragrapOne = null;
        this.paragraphTwo = null;
        this.img = null;
        this.figure = null;
    }
    componentDidMount() {
        this.animation
            .from(this.titleSection, 0.5, { left: '100%' })
            .from(this.hr, 0.5, { right: '100%', autoAlpha: 0 }, '0')
            .from(this.section, 0.5, { left: '100%', autoAlpha: 0 }, '0')
            .from(this.figure, 0.5, { right: '100%', autoAlpha: 0 }, '0')
            .from(this.infotitle, 0.5, { left: 100, autoAlpha: 0 })
            .from(this.paragrapOne, 0.5, { left: -100, autoAlpha: 0 })
            .from(this.paragraphTwo, 0.5, { left: 100, autoAlpha: 0 })
            .from(this.img, 0.3, { scale: 0.5, autoAlpha: 0 });
    }
    render() {
        return (
            <Section>
                <TitleSection ref={(h1) => (this.titleSection = h1)}>Quién soy</TitleSection>
                <HrSection ref={(hr) => (this.hr = hr)} />
                <CardInfo>
                    <SectionInfo ref={(section) => (this.section = section)}>
                        <InfoTitle ref={(h1) => (this.infotitle = h1)}>Frontend and Backend Development</InfoTitle>
                        <Paragraph ref={(p) => (this.paragrapOne = p)}>
                            Desarrollador de aplicaciones de escritorio y web con mas de 5 años de experiencia.
                        </Paragraph>
                        <Paragraph ref={(p) => (this.paragraphTwo = p)}>
                            Actualmente trabajo desarrollando aplicaciones web solucionando problemas o implementando productos a empresas.
                        </Paragraph>
                    </SectionInfo>
                    <SectionImg ref={(section) => (this.figure = section)}>
                        <Img ref={(img) => (this.img = img)} src={profile} />
                    </SectionImg>
                </CardInfo>
            </Section>
        );
    }
}

export default Presentation;
