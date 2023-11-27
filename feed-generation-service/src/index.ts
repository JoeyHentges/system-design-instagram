import express from "express"
import { config } from "dotenv"
import Redis from "ioredis"

import { initScheduledJobs } from "./scheduled"
import { generateFeed } from "./utils/generate-feed"

config()

const app = express()
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
)

const port = process.env.PORT
const appId = process.env.APP_ID
const redisUri = process.env.REDIS_URI as string

const redis = new Redis(redisUri)

initScheduledJobs(redis)

app.get("/health", (_, res) => {
  res.send("Healthy")
})

app.post("/feed", async (req, res) => {
  console.log(`POST /feed Service on APP_ID ${appId}`)
  const { userId } = req.body
  const feed = await generateFeed()
  await redis.set(`${userId}-feed`, JSON.stringify(feed), "EX", 300)
  res.send(feed)
})

app.listen(port, () => {
  console.log(`Service ${appId} is listening on port :${port}`)
})
