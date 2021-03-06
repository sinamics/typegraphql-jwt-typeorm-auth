# GraphQl Mongoose Jwt Typeorm Semantic-Ui

See **Tailwind-css** version (https://github.com/Sinamics/typegraphql-jwt-typeorm-auth/tree/tailwind)

## Description

- Boiler plate project for
  - apollo-server-express
  - type-graphql
  - graphql-codegen
  - typescript
  - typeorm
  - mongodb
  - JWT

## Features

- [x] Semantic-Ui React (https://react.semantic-ui.com/)
- [x] React Lazy Loading with Suspense
- [x] Express Server (port 4000)
- [x] type-Graphql Entry Point (/graphql)
- [x] Graphql Playground Page (http://localhost:4000/graphql)
- [x] Typeorm Settings For MongoDB
- [x] Typeorm Decorators for hasRole (@hasRole(roles: [user, superuser]))
- [x] Basic User Entity (backend/graphql/entity/Users.ts)
- [x] JasonWebToken (JWT) accessToken / refreshToken cookie for authorization.
- [x] username Sign Up
- [x] username Sign In

## Usage

1. Install mongodb on your computer
2. Install `npm i typescript concurrently ts-node-dev -g`
3. Clone package: `git clone https://github.com/Sinamics/typegraphql-jwt-typeorm-auth`
4. Install dependencies `npm i`
5. Create `.env` file with the following variables in the project root folder:

```
SERVER_PORT=4000
ACCESS_TOKEN_SECRET=somerandomkey
REFRESH_TOKEN_SECRET=anotherrandomkey
REFRESH_TOKEN_LIFE="7 days"
ACCESS_TOKEN_LIFE="10s"
PROD_MONGO_CONNECTION=""
DEV_MONGO_CONNECTION="mongodb://localhost/graphqljwtauth"
```

5. run the project `npm start`

This project uses graphql-codegen, and if you make any changes to the .graphql files you need to generate new hooks `npm run codegen`

## Login / Register Page

![privatePage](https://i.ibb.co/XLBP9mp/register.jpg)

## Simple privatePage for testing role decorators

![privatePage](https://i.ibb.co/8XNV0R7/privatepage.jpg)
