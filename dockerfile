FROM node:latest

WORKDIR /React-Demo

COPY . .

RUN npm i
RUN npx webpack

CMD ["node", "server.js"]