import React, { Component } from 'react';
import { TimelineLite } from 'gsap/all';

import linkedinIcon from '../../assets/linkedin.png';

import { HeaderApp, PersonSection, Name, Hr, SectionMenu, Menu, RedSocialIcon } from './styles';

class Header extends Component {
    constructor(props) {
        super(props);

        this.animation = new TimelineLite();

        this.content = null;
        this.name = null;
        this.redSocial = null;
        this.hr = null;
        this.exp = null;
        this.hab = null;
        this.pro = null;
    }

    componentDidMount() {
        this.animation
            .set(this.content, { autoAlpha: 1 })
            .from(this.name, 0.5, { left: '50%', autoAlpha: 0 })
            .from(this.redSocial, 0.5, { right: '50%', autoAlpha: 0 }, "0")
            .from(this.exp, 0.5, { scale: 0.5, autoAlpha: 0 }, "0")
            .from(this.hab, 0.5, { scale: 0.5, autoAlpha: 0 })
            .from(this.pro, 0.5, { scale: 0.5, autoAlpha: 0 });
    }

    render() {
        return (
            <HeaderApp>
                <PersonSection>
                    <Name ref={(h1) => (this.name = h1)}> Gonzalo Piñeiro</Name>
                    <RedSocialIcon src={linkedinIcon} ref={(h1) => (this.redSocial = h1)} />
                </PersonSection>
                <Hr />
                <SectionMenu>
                    <Menu ref={(h1) => (this.exp = h1)}>Experiencia</Menu>
                    <Menu ref={(h1) => (this.hab = h1)}>Habilidades</Menu>
                    <Menu ref={(h1) => (this.pro = h1)}>Proyectos</Menu>
                </SectionMenu>
            </HeaderApp>
        );
    }
}

export default Header;
