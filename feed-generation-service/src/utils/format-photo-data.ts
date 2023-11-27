import { Photo, User } from "../types"

type PhotoSQL = User & Photo

export function formatPhotoData(photoData: PhotoSQL) {
  return {
    id: photoData.id,
    path: photoData.path,
    latitude: photoData.latitude,
    longitude: photoData.longitude,
    timestamp: photoData.timestamp,
    caption: photoData.caption,
    user: {
      id: photoData.user_id,
      name: photoData.name,
      email: photoData.email,
    },
  }
}
