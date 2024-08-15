import styled from 'styled-components'

export const InitialContainer = styled.section`
    display: flex;
    padding: 0 24px 24px 24px;
    gap: 12px;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`

export const PreviewMovieWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px 0; 
    width: 380px; 
    @media (max-width: 820px) {
        width: 100%;
    }
`

export const SetupContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        padding: 4px;
        background: transparent;
        margin-left: 12px;
        cursor: pointer;
    }
`

export const ContentPreviewList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px 0;
    width: 100%;

    @media (max-width: 820px) {
        flex-direction: row;
    }
`

export const Title = styled.h3`
    font-size: 24px;
    color: #eeeeee;
    font-weight: 600;
    line-height: 28.8px;
    display: flex;
    gap: 8px;
    align-items: center;
    height: 30px;
`
