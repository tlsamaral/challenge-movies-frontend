import { ContentOverlayContainer } from './style'

interface ContentOverlayProps {
  children: React.ReactNode
}
function ContentOverlay({ children }: ContentOverlayProps) {
  return <ContentOverlayContainer>{children}</ContentOverlayContainer>
}

export default ContentOverlay
