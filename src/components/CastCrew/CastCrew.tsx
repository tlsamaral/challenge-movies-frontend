import { BorderWithRadio } from '../BorderWithRadio/style'
import { CastCrewContainer, TextContent, Title } from './style'
interface CastCrewProps {
  title: string
  content: string
}
export default function CastCrew({ title, content }: CastCrewProps) {
  return (
    <CastCrewContainer>
      <BorderWithRadio />
      <div>
        <Title>{title}</Title>
        <TextContent>{content}</TextContent>
      </div>
    </CastCrewContainer>
  )
}
