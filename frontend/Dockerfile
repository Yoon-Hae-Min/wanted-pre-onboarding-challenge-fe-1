FROM node:16

COPY . .

RUN npm install -g serve

RUN yarn install

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]