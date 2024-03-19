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

### ref
https://qiita.com/shotashimura/items/3f9e04b93e79592030a4
