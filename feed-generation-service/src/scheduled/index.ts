import { schedule } from "node-cron"
import Redis from "ioredis"
import { config } from "dotenv"

import { query } from "../lib/db"
import { generateFeed } from "../utils/generate-feed"
import { User } from "../types"

config()

const feedGenerationMinutes = process.env.FEED_GENERATION_MINUTES

export const initScheduledJobs = (redis: Redis) => {
  const scheduledFeedGeneration = schedule(
    `*/${feedGenerationMinutes} * * * *`,
    async () => {
      console.log("Execute scheduled feed generation")
      const users = await query("SELECT id from users")

      if (users === null) {
        return
      }

      ;(users as User[]).forEach(async (user) => {
        const feed = await generateFeed()
        await redis.set(
          `${user.id}-feed`,
          JSON.stringify(feed),
          "EX",
          Number(feedGenerationMinutes) * 60
        )
      })
    }
  )

  scheduledFeedGeneration.start()
}
