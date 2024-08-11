import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding:  24px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const InputContainer = styled.article`
    width: 317px;
    height: 48px;
    overflow: hidden;
    background-color: #191919;
    border-radius: 90px;
    display: flex;
    align-items: center;
    position: relative;

    div {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: #232323;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 4px;
        left: 4px;
    }

    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: #fff;
        padding-left: 48px;
    }
`;
export const ConfigSettingIcon = styled.article`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SectionCenter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
