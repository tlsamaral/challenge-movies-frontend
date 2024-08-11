import { FaPlay, FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import {
	PreviewArea,
	PreviewMovie as PreviewMovieContainer,
	PreviewRating,
	Title,
} from "./styled";

interface PreviewMovieProps {
	title: string;
	bannerImg: string;
}
function PreviewMovie({ title, bannerImg }: PreviewMovieProps) {
	return (
		<PreviewMovieContainer bannerImg={bannerImg}>
			<PreviewArea>
				<PreviewRating>
					<FaStar color="#F0E635" size={20} />
					7.1
				</PreviewRating>
				<div>
					<Title>{title}</Title>
					<Button>
						Assistir ao Trailer <FaPlay color="#fff" />
					</Button>
				</div>
			</PreviewArea>
		</PreviewMovieContainer>
	);
}

export default PreviewMovie;
