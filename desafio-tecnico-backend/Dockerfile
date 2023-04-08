FROM node:16.14-alpine

WORKDIR /app

COPY package*.json ./

RUN ["npm", "i"] 

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "run", "dev"]

