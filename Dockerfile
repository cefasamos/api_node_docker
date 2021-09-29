FROM node:alpine

WORKDIR /user/app

COPY package*.json ./

RUN yarn global add nodemon --prefix /usr/local

RUN yarn

COPY . .
EXPOSE 3000

CMD ["yarn", "start"]
