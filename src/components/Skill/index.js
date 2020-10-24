import React from 'react';

import { Section, Skills, SkillCard, SkillTitle, SkillFigure } from './styles';

import {
    CSS3Logo,
    HTMLLogo,
    JSLogo,
    MYSQLLogo,
    ReactLogo,
    NodeLogo,
    WebpackLogo,
    PHPLogo,
    BT4Logo,
    ReduxLogo,
    CLogo,
    CiscoLogo,
} from '../svg';

import { TitleSection } from '../GlobalStyle';
import { Component } from 'react';
import { TimelineLite } from 'gsap';

class Skill extends Component {
    constructor(props) {
        super(props);

        this.animation = new TimelineLite();

        this.content = null;
        this.head = null;
        this.subhead = null;
        this.feature = null;
        this.description = null;
        this.icons = [];
    }

    componentDidMount() {
        this.animation.from(this.titleSection, 0.5, { left: '100%' }).staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    }

    static contentCard = (str, comp) => {
        return (
            <>
                <SkillFigure>{comp}</SkillFigure>
                <SkillTitle>{str}</SkillTitle>
            </>
        );
    };
    render() {
        return (
            <Section>
                <TitleSection ref={(section) => (this.titleSection = section)}>Habilidades</TitleSection>
                <Skills>
                    {iconLogo.map((icon, index) => (
                        <SkillCard ref={(img) => (this.icons[index] = img)}>{icon}</SkillCard>
                    ))}
                </Skills>
            </Section>
        );
    }
}

const iconLogo = [
    Skill.contentCard('CSS3', <CSS3Logo />),
    Skill.contentCard('HTML5', <HTMLLogo />),
    Skill.contentCard('JavaScript', <JSLogo />),
    Skill.contentCard('Bootstrap', <BT4Logo />),
    Skill.contentCard('Webpack', <WebpackLogo />),
    Skill.contentCard('ReactJs', <ReactLogo />),
    Skill.contentCard('Redux', <ReduxLogo />),
    Skill.contentCard('NodeJs', <NodeLogo />),
    Skill.contentCard('PHP', <PHPLogo />),
    Skill.contentCard('MySQL', <MYSQLLogo />),
    Skill.contentCard('C', <CLogo />),
    Skill.contentCard('Cisco', <CiscoLogo />),
];

export default Skill;
