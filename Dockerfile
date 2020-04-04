FROM node:alpine

WORKDIR /usr/app

RUN npm i -g @adonisjs/cli

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD ["adonis", "serve", "--dev"]
