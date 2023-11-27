import { env } from "@/env.mjs"
import { FeedPhoto } from "@/components/feed-photo"

interface ProfilePageProps {
  params: {
    slug: string[]
  }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = params

  const feedResponse = await fetch(`${env.READ_API_URL}/profile/${slug}`)
  const data = await feedResponse.json()

  return (
    <div className="container py-12">
      <div className="pb-4 text-center">
        <p className="text-3xl">{data.name}</p>
        <p className="text-xl text-slate-700/75">{data.email}</p>
      </div>
      <div className="grid w-full grid-cols-3 gap-y-8">
        {data.photos.map((item) => {
          return (
            <FeedPhoto
              {...item}
              user={{ id: data.id, name: data.name, email: data.email }}
            />
          )
        })}
      </div>
    </div>
  )
}
