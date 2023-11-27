import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface HomeUserSelectCardProps {
  userId: number
  name: string
  email: string
  numberPhotos: number
}

export function HomeUserSelectCard(props: HomeUserSelectCardProps) {
  const { userId, name, email, numberPhotos } = props
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {name} has {numberPhotos} photos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Icons.user />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">ID: {userId}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Link
          href={`/feed/${userId}`}
          className={cn(buttonVariants({ variant: "default" }), "w-full")}
        >
          View Feed
        </Link>
        <Link
          href={`/profile/${userId}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          View Profile
        </Link>
      </CardFooter>
    </Card>
  )
}

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]
