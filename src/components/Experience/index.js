import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import { TitleSection, Paragraph, Section, SectionImgExp, SectionInfo, CardInfo, HrSection } from '../GlobalStyle';

class Header extends Component {
    constructor(props) {
        super(props);

        this.animation = new TimelineLite();

        this.titleSection = null;
        this.paragrapOne = null;
        this.paragraphTwo = null;
        this.paragraphThree = null;
        this.img = null;
        this.figure = null;
    }
    componentDidMount() {
        this.animation
            .from(this.titleSection, 0.5, { left: '100%' })
            .from(this.hr, 0.5, { right: '100%', autoAlpha: 0 }, '0')
            .from(this.figure, 0.5, { left: '100%', autoAlpha: 0 }, '0')
            .from(this.section, 0.5, { right: '100%', autoAlpha: 0 }, '0')
            .from(this.paragrapOne, 0.5, { left: -100, autoAlpha: 0 })
            .from(this.paragraphTwo, 0.5, { left: 100, autoAlpha: 0 })
            .from(this.paragraphThree, 0.5, { left: -100, autoAlpha: 0 });
    }
    render() {
        return (
            <Section>
                <TitleSection ref={(h1) => (this.titleSection = h1)}>Experiencia</TitleSection>
                <HrSection ref={(hr) => (this.hr = hr)} />
                <CardInfo>
                    <SectionImgExp ref={(section) => (this.figure = section)}></SectionImgExp>
                    <SectionInfo ref={(section) => (this.section = section)}>
                        <Paragraph ref={(p) => (this.paragrapOne = p)}>
                            Mi experiencia en el desarrollo de software comienza hace 6 años como analista funcional de un sistema para el
                            rubro retail, mis principales funciones eran: hacer testing, brindar soporte y desarrollo de scripts SQL.
                        </Paragraph>
                        <Paragraph ref={(p) => (this.paragraphTwo = p)}>
                            Luego me dedique a estudiar programación, base de datos, business intelligence con el fin de brindar soluciones
                            a particulares y empresas utilizando software a medida.
                        </Paragraph>
                        <Paragraph ref={(p) => (this.paragraphThree = p)}>
                            Actualmente ya tengo mas de 10 proyectos desarrollados con exito, tanto de escritorio como apliacaiones web,
                            utilzando diversas tecnologias.
                        </Paragraph>
                    </SectionInfo>
                </CardInfo>
            </Section>
        );
    }
}

export default Header;
