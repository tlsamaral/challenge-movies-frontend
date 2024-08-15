import type { StaticImageData } from "next/image";
import styled from "styled-components";

export const InitialContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 380px;
    padding: 0 24px 24px 24px;
    gap: 12px;
`;

export const PreviewMovieWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px 0; 
`;

export const Title = styled.h3`
    font-size: 24px;
    color: #eeeeee;
    font-weight: 600;
    line-height: 28.8px;
    display: flex;
    gap: 8px;
    align-items: center;
`;
