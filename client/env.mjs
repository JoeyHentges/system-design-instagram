import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    READ_API_URL: z.string().min(1),
    WRITE_API_URL: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    READ_API_URL: process.env.READ_API_URL,
    WRITE_API_URL: process.env.WRITE_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
})
