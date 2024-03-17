const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQLスキーマ言語を記述してスキーマを構築する
// スキーマはあくまで定義のみで実際のデータ操作は行わない
const schema = buildSchema(`
  type Query {
    hello: String
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

// ルートは、APIエンドポイントごとにリゾルバ関数を提供します
// リゾルバとは特定のフィールドのデータを返す関数（メソッド）であり、実際のデータ操作を行う部分
const root = {
  hello: () => {
    return 'Hello world!';
  },
  //quoteOfTheDay: String をスキーマで定義
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },
  //random: Float! をスキーマで定義
  random: () => {
    return Math.random();
  },
  //rollThreeDice: [Int] をスキーマで定義
  rollThreeDice: () => {
    return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
  },
};

// Expressでサーバーを立てます
// graphiql: true としたので、GraphQLを利用できる
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

