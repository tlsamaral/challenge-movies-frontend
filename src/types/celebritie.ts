export interface CelebriteResponse {
    data: CelebritieData
  }
  
  export interface CelebritieData {
    names: CelebriteName[]
  }
  
  export interface CelebriteName {
    __typename: string
    id: string
    nameText: NameText
    primaryImage: PrimaryImage
    birthDate: BirthDate
    deathStatus: string
    deathDate: any
    knownFor: KnownFor
    meterRanking: MeterRanking
    height: Height
  }
  
  export interface NameText {
    text: string
  }
  
  export interface PrimaryImage {
    __typename: string
    id: string
    url: string
    height: number
    width: number
  }
  
  export interface BirthDate {
    __typename: string
    date: string
    dateComponents: DateComponents
    displayableProperty: DisplayableProperty
  }
  
  export interface DateComponents {
    year: number
    partialYear: any
    month: number
    day: number
    isBCE: boolean
    isApproximate: boolean
  }
  
  export interface DisplayableProperty {
    __typename: string
    value: Value
  }
  
  export interface Value {
    id: string
    plainText: string
  }
  
  export interface KnownFor {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    title: Title
    credit: Credit
  }
  
  export interface Title {
    __typename: string
    id: string
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseYear?: ReleaseYear
    releaseDate?: ReleaseDate
    titleType: TitleType
    primaryImage?: PrimaryImage2
    ratingsSummary: RatingsSummary
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
    endYear?: number
  }
  
  export interface ReleaseDate {
    __typename: string
    month?: number
    day?: number
    year: number
    country: Country
    restriction: any
    attributes: Attribute[]
    displayableProperty: DisplayableProperty2
  }
  
  export interface Country {
    id: string
  }
  
  export interface Attribute {
    id: string
    text: string
  }
  
  export interface DisplayableProperty2 {
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
    displayableProperty: DisplayableProperty3
  }
  
  export interface Category {
    id: string
    text: string
    value: string
  }
  
  export interface DisplayableProperty3 {
    value: Value2
  }
  
  export interface Value2 {
    plainText: string
  }
  
  export interface PrimaryImage2 {
    __typename: string
    id: string
    url: string
    height: number
    width: number
  }
  
  export interface RatingsSummary {
    aggregateRating?: number
  }
  
  export interface Credit {
    __typename: string
    category: Category2
    characters?: Character[]
  }
  
  export interface Category2 {
    id: string
    text: string
  }
  
  export interface Character {
    name: string
  }
  
  export interface MeterRanking {
    __typename: string
    currentRank: number
    rankChange: RankChange
  }
  
  export interface RankChange {
    changeDirection: string
    difference: number
  }
  
  export interface Height {
    measurement: Measurement
  }
  
  export interface Measurement {
    value: number
    unit: string
  }
  