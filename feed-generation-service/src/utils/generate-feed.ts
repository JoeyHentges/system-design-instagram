import { query } from "../lib/db"
import { Photo, User } from "../types"
import { formatPhotoData } from "./format-photo-data"

/**
 * Generate a feed of 10 random photos.
 */
export async function generateFeed() {
  const sqlResponse = await query(
    "SELECT * FROM users JOIN photos ON users.id=photos.user_id ORDER BY RAND() LIMIT 10"
  )

  type SQLFeedItem = User & Photo
  const photos = sqlResponse as SQLFeedItem[]

  return photos.map((item) => formatPhotoData(item))
}
