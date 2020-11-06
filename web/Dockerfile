FROM node:15-alpine as base

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

FROM base AS development

CMD ["yarn", "dev"]

FROM base as test

RUN yarn type-check

