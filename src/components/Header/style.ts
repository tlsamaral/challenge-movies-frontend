import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    padding:  24px;
    display: flex;
    align-items: center;
    position: relative;
`

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
`

interface ConfigSettingIconProps {
  countGenre: number
}
export const ConfigSettingIcon = styled.button<ConfigSettingIconProps>`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: 0;
    cursor: pointer;
    position: relative;

    &:focus {
      background: #313131;
    }

    &::before {
    content: '${(props) => (props.countGenre > 0 ? props.countGenre : '')}';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 20px;
    height: 20px;
    background-color: #6E6E6E; 
    color: #eeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    visibility: ${(props) => (props.countGenre > 0 ? 'visible' : 'hidden')};
  }
`
export const SectionCenter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

interface ModalOverlayProps {
  $isOpen: boolean
}
export const ModalOverlay = styled.div<ModalOverlayProps>`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-top: 12px;
  background: transparent;
  transform: ${(props) => (props.$isOpen ? 'translateY(100%)' : 'translateY(-200%)')};
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-200%) scale(0.8);
    }
    50% {
        opacity: 0.1;
        transform: translateY(100%) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(100%) scale(1);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: .7;
      transform: translateY(100%) scale(1);
    }
    5% {
      opacity: 0.01;
      transform: translateY(-100%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-200%) scale(0.8);
    }
  }

  animation: ${(props) => (props.$isOpen ? 'fadeIn 300ms ease-in-out' : 'fadeOut 300ms ease-in-out')};
`
export const TextResult = styled.small`
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    color: #eee;
`

export const Text = styled.span`
  font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 14.52px;
    text-align: left;
    color: #eee;
`

export const SearchCardWrapper = styled.div``
