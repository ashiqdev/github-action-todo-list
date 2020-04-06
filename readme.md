```
docker-compose -f docker-compose.yml up --build
yarn install
dotenv -e .env yarn deploy:backend
dotenv -e .env yarn seed:backend
dotenv -e .env yarn build
dotenv -e .env yarn start
```