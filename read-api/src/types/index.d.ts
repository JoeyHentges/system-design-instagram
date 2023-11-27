export type User = {
  id: number
  name: string
  email: string
}

export type Photo = {
  id: number
  user_id: number
  path: string
  latitude: number
  longitude: number
  timestamp: Date
  caption: string
}

export type Follow = {
  id: number
  user_id: number
  following_id: number
}

// END of SQL tables

export type Profile = User & {
  photos: Omit<Photo, "user_id">[]
}
