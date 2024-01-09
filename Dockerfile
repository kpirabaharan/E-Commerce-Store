ARG NODE_VERSION=21
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY ./package.json .
RUN npm i

COPY . .

RUN chown -R node:node /usr/src/app

EXPOSE 3000
CMD npm run dev
