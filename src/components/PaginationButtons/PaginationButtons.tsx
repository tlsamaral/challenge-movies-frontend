import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button } from './style'

interface CarouselNavigationButtonsProps {
  onPrev: () => void
  onNext: () => void
  isBeginning: boolean
  isEnd: boolean
}

export default function PaginationButtons({
  onPrev,
  onNext,
  isBeginning,
  isEnd,
}: CarouselNavigationButtonsProps) {
  return (
    <div>
      <Button
        type="button"
        onClick={onPrev}
        disabled={isBeginning}
        style={{
          opacity: isBeginning ? 0.5 : 1,
          cursor: isBeginning ? 'not-allowed' : 'pointer',
        }}
      >
        <FaChevronLeft size={20} color="#eee" />
      </Button>
      <Button
        type="button"
        onClick={onNext}
        disabled={isEnd}
        style={{
          opacity: isEnd ? 0.5 : 1,
          cursor: isEnd ? 'not-allowed' : 'pointer',
        }}
      >
        <FaChevronRight size={20} color="#eee" />
      </Button>
    </div>
  )
}
