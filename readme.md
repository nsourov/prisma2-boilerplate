## Getting started

```sh
git clone https://github.com/nsourov/prisma2-boilerplate.git
cd prisma2-boilerplate
yarn
```

Create `.env` in root.

```sh
cp example.env .env
```
Run database server using `docker-compose.yml`

```sh
ENV_FILE=.env docker-compose -f docker-compose.yml up --build
```

Update/Add database model as your requirements in `prisma/schema.prisma`

```graphql
model Post {
  id         Int        @id @default(autoincrement())
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  published  Boolean    @default(false)
  title      String
}
```

To update/create table on `postgresql`

```sh
dotenv -e .env yarn prisma migrate save -- --name init --experimental
dotenv -e .env yarn prisma migrate up -- --experimental
dotenv -e .env yarn prisma generate
dotenv -e .env yarn dev
```