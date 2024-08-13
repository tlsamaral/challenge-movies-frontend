import styled from 'styled-components'

export const SearchCardContainer = styled.article`
    display: flex;
    width: 100%;
    border-radius: 16px;
    padding: 4px;
    gap: 8px;
    transition: background 150ms;
    cursor: pointer;

    &:hover {
        background: #232323;
    }
`
interface PictureProps {
  src: string
}
export const Picture = styled.div<PictureProps>`
    height: 88px;
    width: 64px;
    border-radius: 16px;
    border: 2px solid #3a3a3a;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
    color: #eee;
`
export const Text = styled.span`
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    line-height: 12px;
    text-align: left;
    color: #b4b4b4;
`
