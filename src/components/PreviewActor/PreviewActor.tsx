import {
  PreviewArea,
  PreviewActor as PreviewActorContainer,
  SubTitle,
  Title,
} from './styled'
import { ActorsNode } from '@/types/actors'

interface PreviewActorProps {
  actor: ActorsNode
  characterName?: string
}
function PreviewActor({ actor, characterName  }: PreviewActorProps) {
  return (
    <PreviewActorContainer $bannerImg={actor.node.primaryImage.url}>
      <PreviewArea>
        <div>
          <Title>
            {actor.node.nameText.text}
          </Title>
          {characterName && (<SubTitle>{actor.node.nameText.text}</SubTitle>)} 
        </div>
      </PreviewArea>
    </PreviewActorContainer>
  )
}

export default PreviewActor
