import express from "express"
import { config } from "dotenv"
import Redis from "ioredis"

import { query } from "./lib/db"
import { Follow, Photo, Profile, User } from "./types"
import { formatPhotoData } from "./utils/format-photo-data"

config()

const port = process.env.PORT
const appId = process.env.APP_ID
const feedGenerationApiUrl = process.env.FEED_GENERATION_API_URL
const redisUri = process.env.REDIS_URI as string

const redis = new Redis(redisUri)

const app = express()

app.get("/health", (req, res) => {
  res.send("Healthy")
})

app.get("/feed", async (req, res) => {
  console.log(`GET /feed Service on APP_ID ${appId}`)
  const { userId, update } = req.query
  const userFeed = await redis.get(`${userId}-feed`)

  if (userFeed !== null && !update) {
    return res.json(JSON.parse(userFeed))
  }

  const feedGenResponse = await fetch(`${feedGenerationApiUrl}/feed`, {
    method: "POST",
    body: JSON.stringify({
      userId,
    }),
  })
  const json = await feedGenResponse.json()
  console.log("feed generation response")
  return res.json(json)
})

app.get("/photo/:photoId", async (req, res) => {
  console.log(`GET /photo/:photoId Service on APP_ID ${appId}`)
  const { photoId } = req.params

  const sqlResponse = await query(
    `SELECT * FROM users JOIN photos ON users.id=photos.user_id WHERE photos.id = ${photoId}`
  )

  if (!sqlResponse || (sqlResponse as any[]).length < 1) {
    return res.status(500).send("No photo found")
  }

  type PhotoSQLResponse = User & Photo
  const photoSql = sqlResponse as PhotoSQLResponse[]

  const response = formatPhotoData(photoSql[0])

  res.json(response)
})

app.get("/profile/:userId", async (req, res) => {
  console.log(`GET /profile/:userId Service on APP_ID ${appId}`)
  const { userId } = req.params

  const sqlResponse = await query(
    `SELECT * FROM users JOIN photos ON users.id=photos.user_id WHERE users.id = ${userId}`
  )

  if (!sqlResponse || (sqlResponse as any[]).length < 1) {
    res.status(500).send("No user found")
  }

  type ProfileSQLResponse = User & Photo
  const profileSql = sqlResponse as ProfileSQLResponse[]

  const response: Profile = {
    id: Number(userId),
    name: profileSql[0].name,
    email: profileSql[0].email,
    photos: profileSql.map((item) => ({
      id: item.id,
      path: item.path,
      latitude: item.latitude,
      longitude: item.longitude,
      timestamp: item.timestamp,
      caption: item.caption,
    })),
  }

  res.json(response)
})

app.get("/followers/:followingId", async (req, res) => {
  console.log(`GET /followers/:followingId Service on APP_ID ${appId}`)
  const { followingId } = req.params

  const sqlResponse = await query(
    `SELECT users.name, users.email FROM follows JOIN users ON follows.user_id=users.id WHERE follows.following_id=${followingId}`
  )

  if (!sqlResponse || (sqlResponse as any[]).length < 1) {
    res.status(500).send("No followers list found")
  }

  const response = sqlResponse as Follow[]

  res.json(response)
})

app.get("/following/:userId", async (req, res) => {
  console.log(`GET /following/:userId Service on APP_ID ${appId}`)
  const { userId } = req.params

  const sqlResponse = await query(
    `SELECT users.name, users.email FROM follows JOIN users ON follows.following_id=users.id WHERE follows.user_id=${userId}`
  )

  if (!sqlResponse || (sqlResponse as any[]).length < 1) {
    res.status(500).send("No following list found")
  }

  const response = sqlResponse as Follow[]

  res.json(response)
})

app.listen(port, () => {
  console.log(`Service ${appId} is listening on port :${port}`)
})
