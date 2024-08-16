import styled from 'styled-components'
interface PreviewActorProps {
  $bannerImg?: string
}
export const PreviewActor = styled.article<PreviewActorProps>`
    width: 100%;
    max-width: 268px;
    height: 253.67px;
    border-radius: 24px;
    padding: 12px;
    position: relative;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), ${(props) => `url(${props?.$bannerImg})`};
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 620px) {
        width: 270px;
    }
    @media (max-width: 570px) {
        width: 250px;
    }
    @media (max-width: 530px) {
        width: 220px;
    }
    @media (max-width: 470px) {
        width: 200px;
    }
    @media (max-width: 370px) {
        width: 166px;
    }
`

export const PreviewArea = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const PreviewRating = styled.article`
    width: 55px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 2px 4px;
    border-radius: 8px;
    background: #EEEEEE40;
    box-shadow: 0 0 12px 0 #00000040;
    backdrop-filter: blur( 4px );
    color: #fff;
    font-weight: 600;
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 22.4px;
    margin-bottom: 12px;
    color: #eee;
`
export const SubTitle = styled.h5`
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: left;
    color: #B4B4B4;
`
