import styled from 'styled-components';

export const HeaderApp = styled.header`
    width: 100%;
    padding-bottom: 30px;
`;

export const PersonSection = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled.h1`
    font-size: 28px;
    position: relative;
    letter-spacing: 1px;
    font-weight: 400;
`;

export const RedSocialIcon = styled.img`
    align-self: center;
    position: relative;
    cursor: pointer;
    width: 33px;
    height: 33px;
`;

export const Hr = styled.hr`
    position: relative;
    color: white;
    border: 0.4px solid white;
    margin: 0;
`;

export const SectionMenu = styled.section`
    margin-top: 12px;
    display: flex;
    padding-left: 5px;
    margin-left: auto;
`;

export const Menu = styled.h1`
    position: relative;
    margin: 0;
    font-size: 15px;
    margin-right: 30px;
    letter-spacing: 0.8px;
    font-weight: 400;
    cursor: pointer;
    @media (max-width: 500px) {
        font-size: 13px;
    }
`;
