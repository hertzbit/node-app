FROM node:14-alpine

WORDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./index.js ./

CMD ["npm", "start"]
