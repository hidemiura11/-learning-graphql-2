### command
```
touch server.js
npm init
npm install express express-graphql graphql --save
node server.js
```

### Query
```
{
  hello
  quoteOfTheDay
  random
  rollThreeDice
  rollDice(numDice: 50, numSides: 100)
  getDie(numSides: 3) {
    numSides
    rollOnce
    roll(numRolls: 5)
  }
}
```

```
query {
  getMessage(id: "a4077910603b05c34e66") {
    author
    content
  }
}
```

```
mutation {
 createMessage(input: {
  author: "Hans Meier"
  content: "German History"
 }) {
  id
 }
}
```

```
mutation {
  updateMessage(
    id: "a4077910603b05c34e66"
    input: {
      author: "Jhon Smith"
      content: "British History"
    }
  ) {
    id
    author
    content
  }
}
```

### ref
https://qiita.com/shotashimura/items/3f9e04b93e79592030a4
