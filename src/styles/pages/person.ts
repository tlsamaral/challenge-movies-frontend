import styled from 'styled-components'

export const PersonContainer = styled.main`
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 0px 24px 24px 24px;
`

export const JobsContainer = styled.section`
    width: 100%;
    max-width: 880px;
`

export const PersonInfoContainer = styled.section`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const JobsList = styled.div`
    width: 100%;
    margin-top: 16px;
`

interface PersonImgProps {
  $src: string
}
export const PersonImg = styled.div<PersonImgProps>`
    width: 100%;
    height: 350px;
    border-radius: 24px;
    border: 4px solid #3A3A3A;
    background-image: url(${(props) => props.$src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const PersonName = styled.h1`
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #fff;
`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const TextTitle = styled.h5`
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.8px;
    text-align: left;
    color: #eee;
`

export const TextContent = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    color: #B4B4B4;
`

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    background-color: #3A3A3A;
    margin: 24px 0;
`

export const Title = styled.h2`
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #eee;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 4px;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    
    span {
        color: #eee;
    }
    button {
        padding: 4px;
        background: transparent;
        margin-left: 12px;
        cursor: pointer;
    }
`
