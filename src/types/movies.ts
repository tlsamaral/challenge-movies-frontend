// export interface MovieInfo {
//   rank: number
//   title: string
//   description: string
//   image: string
//   big_image: string
//   genre: string[]
//   thumbnail: string
//   rating: string
//   id: string
//   year: number
//   imdbid: string
//   imdb_link: string
// }

export interface MovieDataAll {
  data: Data
}

export interface Data {
  movies: Movies
  tv: Tv
}

export interface Movies {
  __typename: string
  edges: MovieInfo[]
}

export interface MovieInfo {
  node: MovieAllInfo
}

export interface MovieAllInfo {
  __typename: string
  id: string
  titleText: TitleText
  originalTitleText: OriginalTitleText
  releaseYear: ReleaseYear
  releaseDate: ReleaseDate
  titleType: TitleType
  primaryImage: PrimaryImage
  metacritic?: Metacritic
  principalCredits: PrincipalCredit[]
  certificate?: Certificate
  plot: Plot
  titleGenres: TitleGenres
  ratingsSummary: RatingsSummary
  canRate: CanRate
}

export interface TitleText {
  text: string
  isOriginalTitle: boolean
}

export interface OriginalTitleText {
  text: string
  isOriginalTitle: boolean
}

export interface ReleaseYear {
  __typename: string
  year: number
  endYear: any
}

export interface ReleaseDate {
  __typename: string
  month: number
  day: number
  year: number
  country: Country
  restriction: any
  attributes: Attribute[]
  displayableProperty: DisplayableProperty
}

export interface Country {
  id: string
}

export interface Attribute {
  id: string
  text: string
}

export interface DisplayableProperty {
  qualifiersInMarkdownList: any
}

export interface TitleType {
  __typename: string
  id: string
  text: string
  categories: Category[]
  canHaveEpisodes: boolean
  isEpisode: boolean
  isSeries: boolean
  displayableProperty: DisplayableProperty2
}

export interface Category {
  id: string
  text: string
  value: string
}

export interface DisplayableProperty2 {
  value: Value
}

export interface Value {
  plainText: string
}

export interface PrimaryImage {
  __typename: string
  id: string
  url: string
  height: number
  width: number
}

export interface Metacritic {
  metascore: Metascore
}

export interface Metascore {
  score: number
}

export interface PrincipalCredit {
  credits: Credit[]
}

export interface Credit {
  name: Name
}

export interface Name {
  __typename: string
  id: string
  nameText: NameText
  primaryImage: PrimaryImage2
}

export interface NameText {
  text: string
}

export interface PrimaryImage2 {
  __typename: string
  id: string
  url: string
  height: number
  width: number
}

export interface Certificate {
  id: string
  ratingsBody: RatingsBody
  ratingReason: string
  rating: string
}

export interface RatingsBody {
  id: string
  text: string
}

export interface Plot {
  id: string
  plotText: PlotText
}

export interface PlotText {
  plainText: string
}

export interface TitleGenres {
  __typename: string
  genres: Genre[]
}

export interface Genre {
  genre: Genre2
}

export interface Genre2 {
  genreId: string
  text: string
}

export interface RatingsSummary {
  aggregateRating?: number
}

export interface CanRate {
  isRatable: boolean
}

export interface PageInfo {
  __typename: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCursor: string
}

export interface Tv {
  __typename: string
  edges: Edge2[]
  pageInfo: PageInfo2
}

export interface Edge2 {
  node: Node2
}

export interface Node2 {
  __typename: string
  id: string
  titleText: TitleText2
  originalTitleText: OriginalTitleText2
  releaseYear: ReleaseYear2
  releaseDate: ReleaseDate2
  titleType: TitleType2
  primaryImage: PrimaryImage3
  metacritic: any
  principalCredits: PrincipalCredit2[]
  certificate?: Certificate2
  plot: Plot2
  titleGenres: TitleGenres2
  ratingsSummary: RatingsSummary2
  canRate: CanRate2
}

export interface TitleText2 {
  text: string
  isOriginalTitle: boolean
}

export interface OriginalTitleText2 {
  text: string
  isOriginalTitle: boolean
}

export interface ReleaseYear2 {
  __typename: string
  year: number
  endYear?: number
}

export interface ReleaseDate2 {
  __typename: string
  month: number
  day: number
  year: number
  country: Country2
  restriction: any
  attributes: Attribute2[]
  displayableProperty: DisplayableProperty3
}

export interface Country2 {
  id: string
}

export interface Attribute2 {
  id: string
  text: string
}

export interface DisplayableProperty3 {
  qualifiersInMarkdownList: any
}

export interface TitleType2 {
  __typename: string
  id: string
  text: string
  categories: Category2[]
  canHaveEpisodes: boolean
  isEpisode: boolean
  isSeries: boolean
  displayableProperty: DisplayableProperty4
}

export interface Category2 {
  id: string
  text: string
  value: string
}

export interface DisplayableProperty4 {
  value: Value2
}

export interface Value2 {
  plainText: string
}

export interface PrimaryImage3 {
  __typename: string
  id: string
  url: string
  height: number
  width: number
}

export interface PrincipalCredit2 {
  credits: Credit2[]
}

export interface Credit2 {
  name: Name2
}

export interface Name2 {
  __typename: string
  id: string
  nameText: NameText2
  primaryImage: PrimaryImage4
}

export interface NameText2 {
  text: string
}

export interface PrimaryImage4 {
  __typename: string
  id: string
  url: string
  height: number
  width: number
}

export interface Certificate2 {
  id: string
  ratingsBody: any
  ratingReason: any
  rating: string
}

export interface Plot2 {
  id: string
  plotText: PlotText2
}

export interface PlotText2 {
  plainText: string
}

export interface TitleGenres2 {
  __typename: string
  genres: Genre3[]
}

export interface Genre3 {
  genre: Genre4
}

export interface Genre4 {
  genreId: string
  text: string
}

export interface RatingsSummary2 {
  aggregateRating: number
}

export interface CanRate2 {
  isRatable: boolean
}

export interface PageInfo2 {
  __typename: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCursor: string
}
