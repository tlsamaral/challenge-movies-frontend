import type { Node } from '@/types/celebritie'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import {
  JobCardContainer,
  JobImage,
  JobInfo,
  RatingContent,
  Text,
  Title,
} from './style'
interface JobCardProps {
  job: Node
}
export default function JobCard({ job }: JobCardProps) {
  return (
    <JobCardContainer>
      <JobImage $src={job.title.primaryImage?.url || '/gen-movie.jpg'} />
      <JobInfo>
        <Title>{job.title.titleText.text}</Title>
        <RatingContent>
          <FaStar color="#F0E635" size={16} />
          {job.title.ratingsSummary.aggregateRating}
        </RatingContent>
        {job.credit.characters && (
          <Text>
            {job.credit.characters[0].name} ({job.credit.category.text})
          </Text>
        )}

        <Text>{job.title.releaseYear?.year}</Text>
      </JobInfo>
    </JobCardContainer>
  )
}
