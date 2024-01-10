ARG NODE_VERSION=21
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY ./package.json .
RUN npm i

COPY  . .

EXPOSE 3000
CMD npm run dev
