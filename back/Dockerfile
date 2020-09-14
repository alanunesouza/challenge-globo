FROM node:alpine

WORKDIR /usr/src/app/back

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "migration:run"]

CMD ["npm", "run", "dev:server"]
