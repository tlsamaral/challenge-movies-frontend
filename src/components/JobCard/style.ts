import styled from 'styled-components'

export const JobCardContainer = styled.article`
    max-width: 318px;
    padding: 4px;
    height: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
`
interface JobImageProps {
  $src: string
}
export const JobImage = styled.div<JobImageProps>`
    width: 64px;
    height: 86px;
    border-radius: 12px;
    border: 2px solid #3A3A3A;
    background-image: url(${(props: JobImageProps) => props.$src});
    background-size: cover;
    background-position: center;
`

export const JobInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Title = styled.h3`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
    color: #fff;
`

export const RatingContent = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
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
