import { TagContainer } from './styled'
interface TagProps {
  text: string
}
export default function Tag({ text }: TagProps) {
  return <TagContainer>{text}</TagContainer>
}
