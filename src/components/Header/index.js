import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import linkedinIcon from '../../assets/linkedin.png';

import { HeaderApp, PersonSection, Name, Hr, SectionMenu, Menu, RedSocialIcon } from './styles';
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
            .from(this.name, 0.5, { left: '50%', autoAlpha: 0 })
            .from(this.redSocial, 0.5, { right: '50%', autoAlpha: 0 }, '0')
            .from(this.ini, 0.5, { scale: 0.5, autoAlpha: 0 })
            .from(this.exp, 0.5, { scale: 0.5, autoAlpha: 0 })
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
                    <Link to="/" ref={(h1) => (this.ini = h1)}>
                        Inicio
                    </Link>
                    <Link to="/experiencia" ref={(h1) => (this.exp = h1)}>
                        Experiencia
                    </Link>
                    <Link to="/habilidades" ref={(h1) => (this.hab = h1)}>
                        Habilidades
                    </Link>
                    <Menu ref={(h1) => (this.pro = h1)}>Proyectos</Menu>
                </SectionMenu>
            </HeaderApp>
        );
    }
}

export default Header;
