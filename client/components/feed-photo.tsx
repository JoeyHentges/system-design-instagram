import Link from "next/link"

import { formatDate } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface FeedPhotoProps {
  path: string
  latitude: string
  longitude: string
  timestamp: string
  caption: string
  user: {
    id: string
    name: string
    email: string
  }
}

export function FeedPhoto(props: FeedPhotoProps) {
  const { path, latitude, longitude, timestamp, caption, user } = props
  const { id, name, email } = user
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>
          <Link href={`/profile/${id}`}>{name}</Link>
        </CardTitle>
        <CardDescription>{email}</CardDescription>
        <CardDescription>{formatDate(timestamp)}</CardDescription>
        <CardDescription>
          {latitude.slice(0, 7)} | {longitude.slice(0, 7)}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative mx-6 h-[300px] flex-none">
        <img
          src={path}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </CardContent>
      <CardFooter className="space-x-2">
        <p>{caption}</p>
      </CardFooter>
    </Card>
  )
}
