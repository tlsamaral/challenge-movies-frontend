import styled from 'styled-components'

interface BannerTopOneProps {
  $bannerImg?: string
}
export const BannerTopOne = styled.div<BannerTopOneProps>`
      height: 826px;
      border-radius: 24px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), ${(props) => `url(${props?.$bannerImg})`};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column-reverse;
      padding: 48px;
      position: relative;

      @media (min-width: 1200px) {
        width: 1000px;
      }

      @media (max-width: 670px) {
        height: 284px;
        padding: 12px;
      }
  `

export const Title = styled.h2`
    font-size: 40px;
    color: #eee;

    @media (max-width: 670px) {
        font-size: 24px;
    }
`

export const Rating = styled.div`
    display: flex;
    gap: 2px;
    color: #fff;
    align-items: center;
    small {
        font-size: 14px;
        color: #B4B4B4;
    }
`
export const MoreInfo = styled.ul`
    display: flex;
    gap: 28px;
    color: #B4B4B4;
`
export const InfoSection = styled.section`
    display: flex;
    align-items: center;
    gap: 12px;

    :first-child {
        list-style: none;
    }

    @media (max-width: 670px) {
        display: none;
    }
`

export const Description = styled.p`
    font-weight: 500;
    line-height: 22.4px;
    max-width: 650px;
    color: #eee;

    @media (max-width: 670px) {
      font-size: 12px;
      line-height: 16.8px;
    }
`

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
