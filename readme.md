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
# Format schema
dotenv -e .env yarn format:schema
# Create/Update table in database
dotenv -e .env yarn migrate
# Apply changes
dotenv -e .env yarn apply:migration
# Generate prisma client
dotenv -e .env yarn generate
```

## Fix migration error on new schema
If you find any error while migration with the current schema then remove the migration and start again migrating new schema.

```sh
# 1. Add new schema on `prisma/schema.prisma`
# 2. Run one line command to run everything
bash clear_docker.sh
# 3. Run docker-compose again
ENV_FILE=.env docker-compose -f docker-compose.yml up --build
# 4. Run again the prisma migration command
dotenv -e .env yarn migrate
dotenv -e .env yarn apply:migration
dotenv -e .env yarn generate
```
