FROM node:18.8.0

## Create app directory
WORKDIR /app

## Copy package.json and package-lock.json
COPY package*.json ./

## Install dependencies
RUN npm install

## Copy app source
COPY . .

## Expose port
EXPOSE 3000

## Start app
CMD [ "npm", "run", "dev"]