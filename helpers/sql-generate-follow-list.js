const list = []

let keys = {}

const userIdList = []

for (let i = 0; i < 20; i += 1) {
  const userId = Math.floor(Math.random() * 10) + 1
  if (!userIdList.includes(userId)) {
    userIdList.push(userId)
  }
  let followingId = Math.floor(Math.random() * 10) + 1
  while (
    followingId === userId ||
    (keys[userId] && keys[userId].includes(followingId))
  ) {
    followingId = Math.floor(Math.random() * 10) + 1
  }
  keys[userId] = [followingId]
  list.push(`(${i}, ${userId}, ${followingId})`)
}

list.forEach((item) => {
  console.log(item + ",")
})

console.log(userIdList.length)
