import { env } from "@/env.mjs"
import { FeedPhoto } from "@/components/feed-photo"

interface FeedPageProps {
  params: {
    slug: string[]
  }
}

export default async function FeedPage({ params }: FeedPageProps) {
  const { slug } = params

  const feedResponse = await fetch(`${env.READ_API_URL}/feed?userId=${slug}`)
  const data = await feedResponse.json()

  return (
    <div className="flex flex-col items-center justify-center gap-y-6 py-4">
      {data.map((item) => {
        return <FeedPhoto {...item} />
      })}
    </div>
  )
}
