const list = []

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1
}

function generateLoremText(numParagraphs, numWords) {
  var loremText = ""
  var words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "Ut",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "Duis",
    "aute",
    "irure",
    "dolor",
    "in",
    "reprehenderit",
    "in",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "dolore",
    "eu",
    "fugiat",
    "nulla",
    "pariatur",
    "Excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
  ]

  for (var i = 0; i < numParagraphs; i++) {
    var paragraph = ""
    for (var j = 0; j < numWords; j++) {
      var randomWord = words[Math.floor(Math.random() * words.length)]
      paragraph += randomWord + " "
    }
    loremText += "" + paragraph + ""
  }
  return loremText.trim()
}

function getRandomDate(from, to) {
  const fromTime = from.getTime()
  const toTime = to.getTime()
  return new Date(fromTime + Math.random() * (toTime - fromTime))
}

const generateDate = () => {
  const random = getRandomDate(
    new Date("2009-02-12T01:57:45.271Z"),
    new Date("2023-02-12T01:57:45.271Z")
  )
  return random.toISOString()
}

const userIdList = []

for (let i = 1; i <= 20; i += 1) {
  const userId = Math.floor(Math.random() * 10) + 1
  if (!userIdList.includes(userId)) {
    userIdList.push(userId)
  }
  list.push(
    `(${i}, ${userId}, 'https://source.unsplash.com/random', ${getRandomInRange(
      -180,
      180,
      5
    )}, ${getRandomInRange(-180, 180, 5)}, '${generateDate()
      .slice(0, 19)
      .replace("T", " ")}', '${generateLoremText(
      1,
      Math.floor(Math.random() * 50) + 1
    )}')`
  )
}

list.forEach((item) => {
  console.log(item + ",")
})

console.log(userIdList.length)
