import type { ActorsNode } from '@/types/actors'
import RouteComponent from '../RouteComponent/RouteComponent'
import {
  PreviewActor as PreviewActorContainer,
  PreviewArea,
  SubTitle,
  Title,
} from './styled'

interface PreviewActorProps {
  actor: ActorsNode
  characterName?: string
}
function PreviewActor({ actor, characterName }: PreviewActorProps) {
  return (
    <RouteComponent path={`/page/person/${actor.node.id}`}>
      <PreviewActorContainer $bannerImg={actor.node.primaryImage.url}>
        <PreviewArea>
          <div>
            <Title>{actor.node.nameText.text}</Title>
            {characterName && <SubTitle>{actor.node.nameText.text}</SubTitle>}
          </div>
        </PreviewArea>
      </PreviewActorContainer>
    </RouteComponent>
  )
}

export default PreviewActor
