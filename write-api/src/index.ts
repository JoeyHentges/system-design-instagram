import express from "express"
import { config } from "dotenv"

import { query } from "./lib/db"
import { ResultSetHeader } from "mysql2"

config()

const app = express()
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
)

const port = process.env.PORT
const appId = process.env.APP_ID

app.get("/health", (_, res) => {
  res.send("Healthy")
})

app.post("/photo", async (req, res) => {
  console.log(`POST /photo Service on APP_ID ${appId}`)
  const { userId, path, latitude, longitude, caption } = req.body

  const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ")

  try {
    const sqlResponse = await query(
      `INSERT INTO photos(user_id, path, latitude, longitude, timestamp, caption) VALUES (${userId}, '${path}', ${latitude}, ${longitude}, '${timestamp}', '${caption}')`
    )

    return res.json({
      message: "Successfully added photo",
      photo: {
        id: (sqlResponse as ResultSetHeader).insertId,
        user_id: userId,
        path,
        latitude,
        longitude,
        timestamp,
        caption,
      },
    })
  } catch (error) {
    console.log("Photo insert error ::", error)
    res.status(500).send("Unable to add photo.")
  }
})

app.put("/photo/:photoId", async (req, res) => {
  console.log(`PUT /photo/:photoId Service on APP_ID ${appId}`)
  const { photoId } = req.params
  const { caption } = req.body

  try {
    const sqlResponse = await query(
      `UPDATE photos SET caption = '${caption}' WHERE photos.id=${photoId}`
    )

    if ((sqlResponse as ResultSetHeader).affectedRows === 0) {
      console.log(`No photo with id ${photoId} found`)
      return res.status(500).send("Unable to update photo.")
    }

    return res.json({
      message: "Successfully updated photo",
      photo: {
        id: photoId,
        caption,
      },
    })
  } catch (error) {
    console.log("Photo update error ::", error)
    res.status(500).send("Unable to update photo.")
  }
})

app.delete("/photo/:photoId", async (req, res) => {
  console.log(`DELETE /photo/:photoId Service on APP_ID ${appId}`)
  const { photoId } = req.params

  try {
    const sqlResponse = await query(
      `DELETE from photos WHERE photos.id=${photoId}`
    )

    if ((sqlResponse as ResultSetHeader).affectedRows === 0) {
      console.log(`No photo with id ${photoId} found`)
      return res.status(500).send("Unable to delete photo.")
    }

    return res.json({
      message: "Successfully deleted photo",
      photo: {
        id: photoId,
      },
    })
  } catch (error) {
    console.log("Photo delete error ::", error)
    res.status(500).send("Unable to delete photo.")
  }
})

app.post("/follow", async (req, res) => {
  console.log(`POST /follow Service on APP_ID ${appId}`)
  const { userId, followingId } = req.body

  try {
    const sqlResponse = await query(
      `INSERT INTO follows(user_id, following_id) VALUES (${userId}, ${followingId})`
    )

    return res.json({
      message: "Successfully added follow",
      follow: {
        id: (sqlResponse as ResultSetHeader).insertId,
      },
    })
  } catch (error) {
    console.log("Follow add error ::", error)
    res.status(500).send("Unable to add follow.")
  }
})

app.put("/unfollow", async (req, res) => {
  console.log(`PUT /unfollow Service on APP_ID ${appId}`)
  const { userId, followingId } = req.body

  try {
    const sqlResponse = await query(
      `DELETE from follows WHERE follows.id=${userId} & follows.following_id=${followingId}`
    )

    if ((sqlResponse as ResultSetHeader).affectedRows === 0) {
      console.log(
        `No follow with user_id ${userId} and following_id ${followingId} found`
      )
      return res.status(500).send("Unable to delete follow.")
    }

    return res.json({
      message: "Successfully deleted follow",
    })
  } catch (error) {
    console.log("Follow delete error ::", error)
    res.status(500).send("Unable to delete follow.")
  }
})

app.listen(port, () => {
  console.log(`Service ${appId} is listening on port :${port}`)
})
