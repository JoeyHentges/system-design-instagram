import { createConnection } from "mysql2/promise"
import { config } from "dotenv"

config()
const uri = process.env.MYSQL_URI

export async function query(sql: string, params?: any) {
  const connection = await createConnection({
    uri,
    connectTimeout: 60000,
  })
  connection.connect()
  const [results] = await connection.execute(sql, params)
  connection.end()

  return results
}
