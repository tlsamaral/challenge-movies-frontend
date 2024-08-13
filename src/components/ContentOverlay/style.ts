import styled from 'styled-components'

export const ContentOverlayContainer = styled.div`
    width: 100%;
    max-height: 251px;
    overflow: hidden auto;
    padding: 16px;
    border-radius: 24px;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &::-webkit-scrollbar {
        background-color: transparent;
        width: 18px;
        border-radius: 4px;
        padding: 10px 0;
    }
    
    &::-webkit-scrollbar-track {
        width: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #eee;
        width: 10px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 999999px;
    }

    small {
        margin-left: 8px;
    }
`
