export interface MoviesFilteredResponse {
    d: MoviesFiltered[]
    q: string
    v: number
  }
  
  export interface MoviesFiltered {
    i: I
    id: string
    l: string
    q: string
    qid: string
    rank: number
    s: string
    y: number
    yr?: string
  }
  
  export interface I {
    height: number
    imageUrl: string
    width: number
  }
  