# Stage 1: Build the NestJS application
FROM node:20.10.0 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Prepare the production environment
FROM node:20.10.0 AS production

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY --from=build /app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/main"]
