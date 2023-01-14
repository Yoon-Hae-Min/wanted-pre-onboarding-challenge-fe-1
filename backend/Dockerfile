FROM node:16

WORKDIR /backend

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]