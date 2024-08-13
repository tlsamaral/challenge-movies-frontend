import styled from 'styled-components'

export const MoviePageContainer = styled.main`
width: 100%;
padding: 0 24px 24px 24px;
`

interface BannerProps {
  $bannerImg: string
}
export const Banner = styled.div<BannerProps>`
width: 100%;
height: 476px;
border-radius: 24px;
padding: 48px;
display: flex;
align-items: flex-end;
background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
background-image: linear-gradient(to top, rgba(0,0,0, 0.9), rgba(0,0,0,0)), url(${(props) => props.$bannerImg});
`

export const TagWrapper = styled.div`
display: flex;
gap: 12px;
`

export const AtrativeInfo = styled.div`
display: flex;
align-items: center;
gap: 8px;
`
export const Title = styled.h1`
font-family: Inter;
font-size: 40px;
font-weight: 700;
line-height: 48.41px;
text-align: left;
color: #eee;
`

export const InfoContent = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`

export const Content = styled.section`
display: flex;
padding: 24px;
gap: 24px;
margin-top: 20px;
`

export const CastCrewContent = styled.div`
height: 100%;
gap: 24px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
