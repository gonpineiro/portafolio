import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import cvIcon from '../../assets/cv.png';
import cv from '../../assets/cv.pdf';

import { HeaderApp, PersonSection, Name, Hr, SectionMenu, Menu, RedSocialIcon, RedSocialSection } from './styles';
import { Link } from '../GlobalStyle';

class Header extends Component {
    constructor(props) {
        super(props);

        this.animation = new TimelineLite();

        this.content = null;
        this.name = null;
        this.redSocial = null;
        this.hr = null;
        this.ini = null;
        this.exp = null;
        this.hab = null;
        this.pro = null;
    }

    componentDidMount() {
        this.animation
            .set(this.content, { autoAlpha: 1 })
            .from(this.name, 0.5, { left: '100%', autoAlpha: 0 })
            .from(this.redSocial, 0.5, { right: '100%', autoAlpha: 0 }, '0')
            .from(this.ini, 0.2, { scale: 0.5, autoAlpha: 0 })
            .from(this.exp, 0.2, { scale: 0.5, autoAlpha: 0 })
            .from(this.hab, 0.2, { scale: 0.5, autoAlpha: 0 })
            .from(this.pro, 0.2, { scale: 0.5, autoAlpha: 0 });
    }

    render() {
        console.log(window.location.origin + cv);
        return (
            <HeaderApp>
                <PersonSection>
                    <Name ref={(h1) => (this.name = h1)}> Gonzalo Piñeiro</Name>
                    <RedSocialSection ref={(h1) => (this.redSocial = h1)}>
                        <RedSocialIcon
                            src={cvIcon}
                            onClick={() => {
                                window.open(window.location.origin + cv);
                                return null;
                            }}
                        />
                        <RedSocialIcon
                            src={linkedinIcon}
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/gonzalo-pi%C3%B1eiro-287257116/');
                                return null;
                            }}
                        />
                        <RedSocialIcon
                            src={githubIcon}
                            onClick={() => {
                                window.open('https://github.com/gonpineiro');
                                return null;
                            }}
                        />
                    </RedSocialSection>
                </PersonSection>
                <Hr />
                <SectionMenu>
                    <Link exact={true} to="/" ref={(h1) => (this.ini = h1)} activeClassName="is-active">
                        Quién soy
                    </Link>
                    <Link to="/experiencia" ref={(h1) => (this.exp = h1)} activeClassName="is-active">
                        Experiencia
                    </Link>
                    <Link to="/habilidades" ref={(h1) => (this.hab = h1)} activeClassName="is-active">
                        Habilidades
                    </Link>
                    {/* <Menu ref={(h1) => (this.pro = h1)}>Proyectos</Menu> */}
                </SectionMenu>
            </HeaderApp>
        );
    }
}

export default Header;
