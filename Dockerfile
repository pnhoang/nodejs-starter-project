FROM node:10-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 4000

ENTRYPOINT [ "yarn", "start"]