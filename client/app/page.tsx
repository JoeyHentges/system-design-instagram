import { env } from "@/env.mjs"
import { HomeUserSelectCard } from "@/components/home-user-select-card"

const users = [1, 2, 3, 4, 5, 6]

export default async function HomePage() {
  const fetchProfiles = async () => {
    console.log("fetching", users)
    const profileList: any[] = []
    for (const user of users) {
      const response = await fetch(`${env.READ_API_URL}/profile/${user}`)
      const data = await response.json()
      // console.log(data)
      profileList.push(data)
    }
    return profileList
  }

  const profiles = await fetchProfiles()

  return (
    <main className="container flex flex-col items-center justify-center gap-y-2 py-12">
      <p className="text-3xl font-bold">Users</p>
      {profiles.map((profile) => {
        return (
          <HomeUserSelectCard
            key={profile.id}
            userId={profile.id}
            name={profile.name}
            email={profile.email}
            numberPhotos={profile.photos.length}
          />
        )
      })}
    </main>
  )
}
