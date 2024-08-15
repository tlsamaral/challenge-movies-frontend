import type { Credit } from '@/types/movies'
import {
  PreviewActor as PreviewActorContainer,
  PreviewArea,
  SubTitle,
  Title,
} from './styled'

interface PreviewPeopleProps {
  people: Credit
  characterName?: string
}
function PreviewPeople({ people, characterName }: PreviewPeopleProps) {
  return (
    <PreviewActorContainer $bannerImg={people.name.primaryImage.url}>
      <PreviewArea>
        <div>
          <Title>{people.name.nameText.text}</Title>
          {characterName && <SubTitle>{characterName}</SubTitle>}
        </div>
      </PreviewArea>
    </PreviewActorContainer>
  )
}

export default PreviewPeople
