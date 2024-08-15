export interface ActorsResponse {
    data: Data
  }
  
  export interface Data {
    topMeterNames: TopMeterNames
  }
  
  export interface TopMeterNames {
    edges: ActorsNode[]
  }
  
  export interface ActorsNode {
    node: Node
  }
  
  export interface Node {
    __typename: string
    id: string
    nameText: NameText
    primaryImage: PrimaryImage
    meterRanking: MeterRanking
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
  
  export interface MeterRanking {
    __typename: string
    currentRank: number
    rankChange: RankChange
  }
  
  export interface RankChange {
    changeDirection: string
    difference: number
  }