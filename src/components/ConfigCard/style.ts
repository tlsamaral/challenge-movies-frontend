import styled from 'styled-components'

interface ConfigCardProps {
  countGenre: number
  inputContainerIsVisible: boolean
}
export const ConfigCardContainer = styled.section<ConfigCardProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
    height: ${({ inputContainerIsVisible }) => (inputContainerIsVisible ? '232px' : '167px')} ;
`
export const Content = styled.div`
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
    background: #191919;
`

export const Title = styled.h3`
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    height: 15px;
    color: #eee;
`

export const CheckTagContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 16px 8px;
    flex-wrap: wrap;
`

export const CheckTagLabel = styled.label`
    width: auto;
    height: auto;
`

export const CheckTagInput = styled.input`
    display: none;
    &:checked + span {
        background: #313131 !important;
        color: #EEEEEE !important;
    }
`

export const TextMoreInfo = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #6E6E6E;
    transition: color 150ms ease;
    display: flex;
    gap: 4px;
    align-items: center;

    &:hover {
        color: #eee;
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    background-color: #3A3A3A;
`

export const Label = styled.label`
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    color: #eee;
`
interface InputContainerProps {
  $isVisible: boolean
}
export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    z-index: 98;
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    position: relative;

    & > small {
        font-size: 12px;
        color: #eee;
    }
`

export const InputDate = styled.input`
    width: 157px;
    height: 48px;
    border-radius: 12px;
    padding: 12px;
    color: #B4B4B4;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
    background: #232323;

    &::-webkit-calendar-picker-indicator {
        filter: invert(80%) sepia(20%) saturate(500%) hue-rotate(180deg) brightness(90%) contrast(90%);
        cursor: pointer;
    }
`
